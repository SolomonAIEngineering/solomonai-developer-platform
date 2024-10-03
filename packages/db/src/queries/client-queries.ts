import { createClient } from "@v1/db/client";
import { TransactionSchema } from "@v1/db/types";

/**
 * Retrieves transactions for a specific bank account.
 *
 * @param options - The options for fetching transactions.
 * @param options.bankAccountId - The unique identifier of the bank account.
 * @param options.limit - The maximum number of transactions to retrieve.
 *
 * @returns A Promise that resolves to an array of TransactionSchema objects if successful,
 *          or null if an error occurs.
 *
 * @throws {Error} If there's an issue with the database connection or query execution.
 *
 * @example
 * const transactions = await getTransactionsByBankAccountId({
 *   bankAccountId: "123456",
 *   limit: 10
 * });
 * if (transactions) {
 *   console.log(`Retrieved ${transactions.length} transactions`);
 * } else {
 *   console.log("Failed to retrieve transactions");
 * }
 */
export async function getTransactionsByBankAccountId({
  bankAccountId,
  limit,
}: {
  bankAccountId: string;
  limit: number;
}): Promise<TransactionSchema[] | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("bank_account_id", bankAccountId)
    .order("date", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching transactions:", error);
    return null;
  }

  return data as TransactionSchema[];
}
