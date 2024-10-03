import type { Client } from "../types";

/**
 * Parameters for updating an inbox item.
 * @typedef {Object} UpdateInboxByIdParams
 * @property {string} id - The unique identifier of the inbox item to update.
 * @property {string} [display_name] - Optional new display name for the inbox item.
 * @property {"deleted"} [status] - Optional status update, currently only supports "deleted".
 * @property {string} [attachment_id] - Optional identifier for an associated attachment.
 * @property {string} [transaction_id] - Optional identifier for an associated transaction.
 * @property {string} teamId - The identifier of the team associated with this inbox item.
 */
type UpdateInboxByIdParams = {
  id: string;
  display_name?: string;
  status?: "deleted";
  attachment_id?: string;
  transaction_id?: string;
  teamId: string;
};

/**
 * Updates an inbox item by its ID and handles associated attachments.
 *
 * @param {Client} supabase - The Supabase client instance for database operations.
 * @param {UpdateInboxByIdParams} params - The parameters for updating the inbox item.
 * @returns {Promise<Object>} A promise that resolves to the updated inbox item or the result of the attachment deletion.
 *
 * @description
 * This function performs the following operations:
 * 1. Updates the inbox item with the provided data.
 * 2. If a transaction_id is provided and the inbox item exists:
 *    - Creates a new transaction attachment.
 *    - Updates the inbox item with the new attachment_id.
 * 3. If no transaction_id is provided but an attachment_id exists:
 *    - Deletes the associated transaction attachment.
 *
 * @throws Will throw an error if the database operations fail.
 */
export async function updateInboxById(
  supabase: Client,
  params: UpdateInboxByIdParams,
) {
  const { id, teamId, ...data } = params;

  const inbox = await supabase
    .from("inbox")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  const { data: inboxData } = inbox;

  if (inboxData && params.transaction_id) {
    const { data: attachmentData } = await supabase
      .from("transaction_attachments")
      .insert({
        type: inboxData.content_type,
        path: inboxData.file_path,
        transaction_id: params.transaction_id,
        size: inboxData.size,
        name: inboxData.file_name,
        team_id: teamId,
      })
      .select()
      .single();

    if (attachmentData) {
      return supabase
        .from("inbox")
        .update({ attachment_id: attachmentData.id })
        .eq("id", params.id)
        .select()
        .single();
    }
  } else {
    if (inboxData?.attachment_id) {
      return supabase
        .from("transaction_attachments")
        .delete()
        .eq("id", inboxData.attachment_id);
    }
  }

  return inbox;
}