import { getUser } from "@v1/db/cached-queries";
import { getVaultRecursiveQuery } from "@v1/db/queries";
import { createClient } from "@v1/db/server";
import { download } from "@v1/db/storage";
import { Client } from "@v1/db/types";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";
import { NextRequest } from "next/server";

export const preferredRegion = ["fra1", "sfo1", "iad1"];
export const dynamic = "force-dynamic";

/**
 * Downloads files from the vault and creates a zip archive.
 *
 * @param teamId - The ID of the team whose files are being downloaded.
 * @param path - The path in the vault from which to start the recursive file download.
 * @returns A Promise that resolves to a Blob containing the zip file data.
 *
 * @remarks
 * This function performs the following steps:
 * 1. Creates a Supabase client.
 * 2. Retrieves all files in the specified path recursively.
 * 3. Initiates download of all files concurrently.
 * 4. Creates a new zip archive.
 * 5. Adds successfully downloaded files to the zip archive.
 * 6. Finalizes and returns the zip archive as a Blob.
 */
async function downloadAndZipFiles(
  teamId: string,
  path: string,
): Promise<Blob> {
  // Create a Supabase client for database operations
  const supabase = createClient() as unknown as Client;

  // Retrieve all files in the specified path recursively
  const files = await getVaultRecursiveQuery(supabase, { teamId, path });

  // Create an array of download promises for all files
  const downloadPromises = files.map((file) =>
    download(supabase, {
      bucket: "vault",
      path: `${file.basePath}/${file.name}`,
    }),
  );

  // Wait for all downloads to complete
  const downloadResults = await Promise.allSettled(downloadPromises);

  // Create a new zip archive
  const zipFileWriter = new BlobWriter("application/zip");
  const zipWriter = new ZipWriter(zipFileWriter, { bufferedWrite: true });

  // Add successfully downloaded files to the zip archive
  downloadResults.forEach((result, index) => {
    if (result.status === "fulfilled" && result.value.data) {
      zipWriter.add(files[index].name, new BlobReader(result.value.data));
    }
  });

  // Finalize and return the zip archive
  return zipWriter.close();
}

/**
 * Handles GET requests to download files as a zip archive.
 *
 * @param req - The incoming Next.js request object.
 * @returns A Promise that resolves to a Response object containing the zip file or an error message.
 *
 * @remarks
 * This function performs the following steps:
 * 1. Extracts query parameters from the request URL.
 * 2. Validates the presence of the required 'path' parameter.
 * 3. Retrieves the current user and their associated team.
 * 4. Calls downloadAndZipFiles to create the zip archive.
 * 5. Sets appropriate headers for file download.
 * 6. Returns the zip file as a downloadable response.
 *
 * Error handling:
 * - Returns a 400 status if the 'path' parameter is missing.
 * - Returns a 401 status if the user is not found or has no associated team.
 * - Returns a 500 status for any other errors during the process.
 */
export async function GET(req: NextRequest): Promise<Response> {
  // Extract query parameters from the request URL
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const filename = searchParams.get("filename") || "download.zip";

  // Validate the presence of the required 'path' parameter
  if (!path) {
    return new Response("Path is required", { status: 400 });
  }

  // Retrieve the current user and their associated team
  const user = await getUser();
  const teamId = user?.data?.team_id;

  // Ensure the user is authenticated and associated with a team
  if (!teamId) {
    return new Response("User not found or no team associated", {
      status: 401,
    });
  }

  try {
    // Create the zip archive containing the requested files
    const zipData = await downloadAndZipFiles(teamId, path);

    // Set headers for file download
    const headers = new Headers();
    headers.set("Content-Disposition", `attachment; filename="${filename}"`);
    headers.set("Content-Type", "application/zip");

    // Return the zip file as a downloadable response
    return new Response(zipData, { headers });
  } catch (error) {
    // Log the error and return a generic error response
    console.error("Error creating zip file:", error);
    return new Response("An error occurred while creating the zip file", {
      status: 500,
    });
  }
}
