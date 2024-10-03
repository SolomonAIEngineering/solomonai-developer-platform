import { getUser } from "@v1/db/cached-queries";
import { createClient } from "@v1/db/server";
import { download } from "@v1/db/storage";
import { Client } from "@v1/db/types";
import { NextRequest, NextResponse } from "next/server";

/**
 * Preferred regions for serverless function deployment.
 * This helps in optimizing latency for different geographical locations.
 */
export const preferredRegion = ["fra1", "sfo1", "iad1"];

/**
 * Handles GET requests for file downloads.
 *
 * This function processes incoming requests to download files from a secure storage.
 * It authenticates the user, retrieves the requested file, and sends it as an attachment.
 *
 * @param req - The incoming Next.js request object.
 * @param res - The Next.js response object (not used directly in this implementation).
 * @returns A Response object containing the file data and appropriate headers.
 *
 * @throws Will throw an error if file retrieval fails or if required parameters are missing.
 */
export async function GET(req: NextRequest, res: NextResponse) {
  // Initialize Supabase client for database operations
  const supabase = createClient() as unknown as Client;

  // Authenticate and retrieve the current user
  const user = await getUser();

  // Parse the request URL to extract query parameters
  const requestUrl = new URL(req.url);
  const path = requestUrl.searchParams.get("path");
  const filename = requestUrl.searchParams.get("filename");

  // Validate required parameters
  if (!path || !filename) {
    throw new Error("Missing required parameters: path or filename");
  }

  // Download the file from storage
  const { data } = await download(supabase, {
    bucket: "vault",
    path: `${user?.data?.team_id}/${path}`,
  });

  // If no data is returned, throw an error
  if (!data) {
    throw new Error("File not found or download failed");
  }

  // Prepare response headers
  const responseHeaders = new Headers(res.headers);

  // Set Content-Disposition header to force download with the specified filename
  responseHeaders.set(
    "Content-Disposition",
    `attachment; filename="${filename}"`,
  );

  // Return the file data as a downloadable attachment
  return new Response(data, {
    headers: responseHeaders,
  });
}
