import type { Result } from "@internal/error";

import { Err, FetchError, Ok } from "@internal/error";
import { z } from "zod";

type VercelErrorResponse = {
  error: string;
  message: string;
};

const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export type Project = z.infer<typeof projectSchema>;

const environmentVariable = z.object({});
export type EnvironmentVariable = z.infer<typeof environmentVariable>;

/**
 * Vercel API client for interacting with Vercel projects and environment variables.
 */
export class Vercel {
  private readonly baseUrl: string;
  private readonly token: string;
  private readonly teamId: string | null;

  /**
   * Creates a new Vercel API client instance.
   * @param opts - Configuration options for the Vercel client.
   * @param opts.accessToken - The Vercel API access token.
   * @param opts.baseUrl - Optional custom base URL for the Vercel API (default: "https://api.vercel.com").
   * @param opts.teamId - Optional team ID for team-specific operations.
   */
  constructor(opts: {
    accessToken: string;
    baseUrl?: string;
    teamId?: string;
  }) {
    this.baseUrl = opts.baseUrl ?? "https://api.vercel.com";
    this.token = opts.accessToken;
    this.teamId = opts.teamId ?? null;
  }

  /**
   * Performs a fetch request to the Vercel API.
   * @template TResult - The expected result type of the API call.
   * @param req - The request configuration object.
   * @param req.method - The HTTP method for the request.
   * @param req.path - An array of path segments for the API endpoint.
   * @param req.parameters - Optional query parameters for the request.
   * @param req.opts - Optional fetch options (cache and revalidation).
   * @param req.body - Optional request body.
   * @returns A Promise resolving to a Result containing either the API response or a FetchError.
   */
  private async fetch<TResult>(req: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string[];
    parameters?: Record<string, unknown>;
    opts?: { cache?: RequestCache; revalidate?: number };
    body?: unknown;
  }): Promise<Result<TResult, FetchError>> {
    const url = new URL(req.path.join("/"), this.baseUrl);
    try {
      if (req.parameters) {
        for (const [key, value] of Object.entries(req.parameters)) {
          if (typeof value === "undefined" || value === null) {
            continue;
          }
          url.searchParams.set(key, value.toString());
        }
      }
      if (this.teamId) {
        url.searchParams.set("teamId", this.teamId);
      }
      const res = await fetch(url, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: req.body ? JSON.stringify(req.body) : undefined,
        cache: req.opts?.cache,
        // @ts-ignore
        next: {
          revalidate: req.opts?.revalidate,
        },
      });
      if (!res.ok) {
        const error = (await res.json()) as VercelErrorResponse;
        console.error(error);
        return Err(
          new FetchError({
            message: error.message,
            retry: true,
            context: {
              url: url.toString(),
              method: req.method,
            },
          }),
        );
      }
      const body = await res.json();
      return Ok(body);
    } catch (e) {
      return Err(
        new FetchError({
          message: (e as Error).message,
          retry: true,
          context: {
            url: url.toString(),
            method: req.method,
          },
        }),
      );
    }
  }

  /**
   * Retrieves details of a specific Vercel project.
   * @param projectId - The ID of the project to retrieve.
   * @returns A Promise resolving to a Result containing either the Project details or a FetchError.
   */
  public async getProject(
    projectId: string,
  ): Promise<Result<Project, FetchError>> {
    return this.fetch({
      method: "GET",
      path: ["v9", "projects", projectId],
    });
  }

  /**
   * Lists all projects associated with the authenticated account or team.
   * @returns A Promise resolving to a Result containing either an array of Projects or a FetchError.
   */
  public async listProjects(): Promise<Result<Project[], FetchError>> {
    const res = await this.fetch<{ projects: Project[] }>({
      method: "GET",
      path: ["v9", "projects"],
    });
    if (res.err) {
      return res;
    }
    return Ok(res.val.projects);
  }

  /**
   * Creates or updates an environment variable for a specific project.
   * @param projectId - The ID of the project to update.
   * @param environment - The deployment environment (e.g., "production", "preview", "development").
   * @param key - The name of the environment variable.
   * @param value - The value of the environment variable.
   * @param sensitive - Optional flag to mark the variable as sensitive (encrypted).
   * @returns A Promise resolving to a Result containing the created environment variable ID or a FetchError.
   */
  public async upsertEnvironmentVariable(
    projectId: string,
    environment: string,
    key: string,
    value: string,
    sensitive?: boolean,
  ): Promise<Result<{ created: { id: string } }, FetchError>> {
    return await this.fetch({
      method: "POST",
      path: ["v10", "projects", projectId, "env"],
      parameters: { upsert: true },
      body: {
        key,
        value,
        type: sensitive
          ? environment === "development"
            ? "encrypted"
            : "sensitive"
          : "plain",
        target: [environment],
      },
    });
  }

  /**
   * Removes an environment variable from a specific project.
   * @param projectId - The ID of the project containing the environment variable.
   * @param envId - The ID of the environment variable to remove.
   * @returns A Promise resolving to a Result indicating success or a FetchError.
   */
  public async removeEnvironmentVariable(
    projectId: string,
    envId: string,
  ): Promise<Result<void, FetchError>> {
    return await this.fetch({
      method: "DELETE",
      path: ["v10", "projects", projectId, "env", envId],
    });
  }
}
