import { getCurrentUserTeamQuery } from "../queries";
import type { Client } from "../types";

/**
 * Represents an attachment associated with a transaction.
 */
export type Attachment = {
  /** The type of the attachment (e.g., "image", "document") */
  type: string;
  /** The name of the attachment file */
  name: string;
  /** The size of the attachment in bytes */
  size: number;
  /** An array representing the file path of the attachment */
  path: string[];
  /** The ID of the transaction this attachment belongs to */
  transaction_id: string;
};

/**
 * Creates multiple attachments for the current user's team.
 *
 * @param supabase - The Supabase client instance
 * @param attachments - An array of Attachment objects to be created
 * @returns A Promise that resolves to the created attachment data
 * @throws Error if the current user team cannot be retrieved or if the user is not associated with a team
 */
export async function createAttachments(
  supabase: Client,
  attachments: Attachment[],
) {
  const res = await getCurrentUserTeamQuery(supabase);

  if (!res) {
    throw new Error("Failed to get current user team");
  }

  const userData = res.data;

  if (!userData?.team_id) {
    throw new Error("User is not associated with a team");
  }

  const { data, error } = await supabase
    .from("transaction_attachments")
    .insert(
      attachments.map((attachment) => ({
        ...attachment,
        team_id: userData?.team_id,
      })),
    )
    .select();

  if (error) throw error;
  return data;
}

/**
 * Deletes a specific attachment by its ID.
 *
 * @param supabase - The Supabase client instance
 * @param id - The ID of the attachment to be deleted
 * @returns A Promise that resolves to the deleted attachment data, including id, transaction_id, name, and team_id
 */
export async function deleteAttachment(supabase: Client, id: string) {
  const { data, error } = await supabase
    .from("transaction_attachments")
    .delete()
    .eq("id", id)
    .select("id, transaction_id, name, team_id")
    .single();

  if (error) throw error;
  return data;
}

/**
 * Updates an existing attachment.
 *
 * @param supabase - The Supabase client instance
 * @param id - The ID of the attachment to be updated
 * @param updates - The attachment data to be updated
 * @returns A Promise that resolves to the updated attachment data
 */
export async function updateAttachment(
  supabase: Client,
  id: string,
  updates: Partial<Attachment>
) {
  const { data, error } = await supabase
    .from("transaction_attachments")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Deletes all attachments for a specific transaction.
 *
 * @param supabase - The Supabase client instance
 * @param transactionId - The ID of the transaction
 * @returns A Promise that resolves to the deleted attachment data
 */
export async function deleteAttachmentsForTransaction(supabase: Client, transactionId: string) {
  const { data, error } = await supabase
    .from("transaction_attachments")
    .delete()
    .eq("transaction_id", transactionId)
    .select();

  if (error) throw error;
  return data;
}