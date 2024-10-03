import { createClient } from "@v1/db/client";
import { upload, UploadParams } from "@v1/db/storage";
import { Client } from "@v1/db/types";
import { useState } from "react";

/**
 * Interface for the return value of the uploadFile function
 */
interface UploadFileResult {
  url: string;
  path: Array<string>;
}

/**
 * Custom hook for handling file uploads
 * @returns An object containing the uploadFile function and loading state
 */
export function useUpload() {
  const supabase = createClient() as unknown as Client;
  const [isLoading, setLoading] = useState<boolean>(false);

  /**
   * Uploads a file to the specified bucket and path
   * @param {UploadFileParams} params - The parameters for the file upload
   * @returns {Promise<UploadFileResult>} A promise that resolves to the upload result
   */
  const uploadFile = async ({
    file,
    path,
    bucket,
  }: UploadParams): Promise<UploadFileResult> => {
    setLoading(true);

    const url = await upload(supabase, {
      path,
      file,
      bucket,
    });

    setLoading(false);

    return {
      url,
      path,
    };
  };

  return {
    uploadFile,
    isLoading,
  };
}
