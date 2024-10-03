import type { Client, InboxItem, InboxUpdate } from "../types";
import { Database } from "../types/db";

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
 * Creates a new inbox item in the database.
 *
 * @param {Client} supabase - The Supabase client instance for database operations.
 * @param {InboxItem} inboxItem - The inbox item to be created. This should conform to the InboxItem type,
 *                                which includes properties like display_name, status, attachment_id, etc.
 * @returns {Promise<InboxItem>} A promise that resolves to the created inbox item data.
 * @throws {Error} If there's an error during the creation process, such as a database constraint violation.
 *
 * @example
 * const newItem = await createInboxItem(supabase, {
 *   display_name: "New Invoice",
 *   status: "new",
 *   team_id: "team-123",
 *   // ... other properties
 * });
 */
export async function createInboxItem(
  supabase: Client,
  inboxItem: InboxItem,
): Promise<InboxItem> {
  const { data, error } = await supabase
    .from("inbox")
    .insert(inboxItem)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Updates an existing inbox item in the database.
 *
 * @param {Client} supabase - The Supabase client instance for database operations.
 * @param {string} id - The unique identifier of the inbox item to be updated.
 * @param {InboxUpdate} updates - An object containing the fields to be updated. This should conform to
 *                                the InboxUpdate type, which includes partial properties of InboxItem.
 * @returns {Promise<InboxItem>} A promise that resolves to the updated inbox item data.
 * @throws {Error} If there's an error during the update process, such as the item not being found.
 *
 * @example
 * const updatedItem = await updateInboxItem(supabase, "item-123", {
 *   status: "processing",
 *   display_name: "Updated Invoice",
 * });
 */
export async function updateInboxItem(
  supabase: Client,
  id: string,
  updates: InboxUpdate,
): Promise<InboxItem> {
  const { data, error } = await supabase
    .from("inbox")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

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

/**
 * Deletes a specific inbox item from the database by its ID.
 *
 * @param {Client} supabase - The Supabase client instance for database operations.
 * @param {string} id - The unique identifier of the inbox item to be deleted.
 * @returns {Promise<InboxItem | null>} A promise that resolves to the deleted inbox item data,
 *                                      or null if the item was not found.
 * @throws {Error} If there's an error during the deletion process.
 *
 * @example
 * const deletedItem = await deleteInboxItem(supabase, "item-123");
 * if (deletedItem) {
 *   console.log("Item deleted:", deletedItem.id);
 * } else {
 *   console.log("Item not found");
 * }
 */
export async function deleteInboxItem(
  supabase: Client,
  id: string,
): Promise<InboxItem | null> {
  const { data, error } = await supabase
    .from("inbox")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Changes the status of an inbox item in the database.
 *
 * @param {Client} supabase - The Supabase client instance for database operations.
 * @param {string} id - The unique identifier of the inbox item.
 * @param {Database['public']['Enums']['inbox_status']} status - The new status to set. This should be one of
 *                                                              the valid statuses defined in the database schema.
 * @returns {Promise<InboxItem>} A promise that resolves to the updated inbox item data.
 * @throws {Error} If there's an error during the status update process, such as an invalid status.
 *
 * @example
 * const updatedItem = await changeInboxItemStatus(supabase, "item-123", "archived");
 * console.log("New status:", updatedItem.status);
 */
export async function changeInboxItemStatus(
  supabase: Client,
  id: string,
  status: Database["public"]["Enums"]["inbox_status"],
): Promise<InboxItem> {
  const { data, error } = await supabase
    .from("inbox")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Retrieves inbox items for a specific team from the database, with pagination support.
 *
 * @param {Client} supabase - The Supabase client instance for database operations.
 * @param {string} teamId - The unique identifier of the team whose inbox items are being retrieved.
 * @param {number} [limit=50] - The maximum number of items to retrieve per page. Defaults to 50.
 * @param {number} [offset=0] - The number of items to skip (for pagination). Defaults to 0.
 * @returns {Promise<InboxItem[]>} A promise that resolves to an array of inbox items.
 * @throws {Error} If there's an error during the retrieval process.
 *
 * @example
 * // Retrieve the first page of inbox items (50 items)
 * const firstPage = await getInboxItemsForTeam(supabase, "team-123");
 *
 * // Retrieve the second page of inbox items (next 50 items)
 * const secondPage = await getInboxItemsForTeam(supabase, "team-123", 50, 50);
 */
export async function getInboxItemsForTeam(
  supabase: Client,
  teamId: string,
  limit: number = 50,
  offset: number = 0,
): Promise<InboxItem[]> {
  const { data, error } = await supabase
    .from("inbox")
    .select("*")
    .eq("team_id", teamId)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) throw error;
  return data;
}
