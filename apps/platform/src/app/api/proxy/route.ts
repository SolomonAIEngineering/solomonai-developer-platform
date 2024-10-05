export const runtime = 'edge';

import { getSession } from "@v1/db/cached-queries";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const querySchema = z.object({
  filePath: z.string().min(1),
});

/**
 * Handles GET requests for proxying file access from Supabase storage.
 *
 * This function acts as a proxy between the client and Supabase storage,
 * ensuring that only authenticated users can access files. It retrieves
 * the file from Supabase storage using the user's access token.
 *
 * @param {NextRequest} req - The incoming request object from Next.js.
 *
 * @returns {Promise<Response>} A promise that resolves to either:
 *   - A NextResponse with an appropriate error status if validation or authentication fails.
 *   - The response from fetching the file from Supabase storage.
 *
 * @throws Will throw an error if there's an issue with the session retrieval
 *         or the fetch request to Supabase storage.
 *
 * @example
 * // Example usage in a Next.js client component:
 * const response = await fetch('/api/proxy?filePath=public/example.jpg');
 * if (response.ok) {
 *   const blob = await response.blob();
 *   // Use the blob to display or process the file
 * }
 */
export async function GET(req: NextRequest): Promise<Response> {
  try {
    const { filePath } = validateQuery(req);
    const session = await getAuthenticatedSession();

    return await fetchFromSupabaseStorage(filePath, session.access_token);
  } catch (error) {
    return handleError(error);
  }
}

function validateQuery(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const result = querySchema.safeParse(Object.fromEntries(searchParams));

  if (!result.success) {
    throw new Error("Invalid query parameters");
  }

  return result.data;
}

async function getAuthenticatedSession() {
  const {
    data: { session },
  } = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}

async function fetchFromSupabaseStorage(
  filePath: string,
  accessToken: string,
): Promise<Response> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/${filePath}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Supabase storage error: ${response.statusText}`);
  }

  return response;
}

function handleError(error: unknown): Response {
  console.error("Proxy error:", error);

  if (error instanceof Error) {
    if (error.message === "Unauthorized") {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (error.message === "Invalid query parameters") {
      return new NextResponse("Bad Request", { status: 400 });
    }
  }

  return new NextResponse("Internal Server Error", { status: 500 });
}
