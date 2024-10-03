import type { Client } from "../types";

type CreateTransactionsData = {
  transactions: any[];
  teamId: string;
};

/**
 * Creates multiple transactions in the database.
 *
 * @param supabase - The Supabase client instance.
 * @param data - An object containing the transactions to create and the team ID.
 * @param data.transactions - An array of transaction objects to be inserted.
 * @param data.teamId - The ID of the team associated with these transactions.
 * @returns A promise that resolves to the result of the insert operation.
 */
export async function createTransactions(
  supabase: Client,
  data: CreateTransactionsData,
) {
  const { transactions, teamId } = data;

  return supabase.from("transactions").insert(
    transactions.map((transaction) => ({
      ...transaction,
      team_id: teamId,
    })),
  );
}

/**
 * Updates a single transaction in the database.
 *
 * @param supabase - The Supabase client instance.
 * @param id - The ID of the transaction to update.
 * @param data - An object containing the fields to update.
 * @returns A promise that resolves to the updated transaction data.
 */
export async function updateTransaction(
  supabase: Client,
  id: string,
  data: any,
) {
  return supabase
    .from("transactions")
    .update(data)
    .eq("id", id)
    .select("id, category, category_slug, team_id, name, status")
    .single();
}

type UpdateSimilarTransactionsCategoryParams = {
  id: string;
  team_id: string;
};

/**
 * Updates the category of similar transactions based on a given transaction.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the transaction ID and team ID.
 * @param params.id - The ID of the reference transaction.
 * @param params.team_id - The ID of the team associated with the transactions.
 * @returns A promise that resolves to the result of the update operation, or null if the reference transaction has no category.
 */
export async function updateSimilarTransactionsCategory(
  supabase: Client,
  params: UpdateSimilarTransactionsCategoryParams,
) {
  const { id, team_id } = params;

  const transaction = await supabase
    .from("transactions")
    .select("name, category_slug")
    .eq("id", id)
    .single();

  if (!transaction?.data?.category_slug) {
    return null;
  }

  return supabase
    .from("transactions")
    .update({ category_slug: transaction.data.category_slug })
    .textSearch("fts_vector", `'${transaction.data.name}'`)
    .eq("team_id", team_id)
    .select("id, team_id");
}

type UpdateSimilarTransactionsRecurringParams = {
  id: string;
  team_id: string;
};

/**
 * Updates the recurring status and frequency of similar transactions based on a given transaction.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the transaction ID and team ID.
 * @param params.id - The ID of the reference transaction.
 * @param params.team_id - The ID of the team associated with the transactions.
 * @returns A promise that resolves to the result of the update operation.
 */
export async function updateSimilarTransactionsRecurring(
  supabase: Client,
  params: UpdateSimilarTransactionsRecurringParams,
) {
  const { id, team_id } = params;

  const transaction = await supabase
    .from("transactions")
    .select("name, recurring, frequency")
    .eq("id", id)
    .single();

  return supabase
    .from("transactions")
    .update({
      recurring: transaction.data?.recurring,
      frequency: transaction.data?.frequency,
    })
    .textSearch("fts_vector", `'${transaction.data?.name}'`)
    .eq("team_id", team_id)
    .select("id, team_id");
}