import { getAccessValidForDays } from "@v1/utils/utils";
import { addDays } from "date-fns";
import type { Client } from "../types";

type CreateBankAccountsPayload = {
  accounts: {
    account_id: string;
    institution_id: string;
    logo_url: string;
    name: string;
    bank_name: string;
    currency: string;
    enabled: boolean;
    balance: number;
    type: "depository" | "credit" | "other_asset" | "loan" | "other_liability";
  }[];
  balance: number;
  accessToken?: string;
  enrollmentId?: string;
  referenceId?: string;
  teamId: string;
  userId: string;
  provider: "gocardless" | "teller" | "plaid";
};

/**
 * Creates bank accounts and their associated bank connection.
 *
 * @param supabase - The Supabase client instance.
 * @param payload - An object containing the necessary data to create bank accounts.
 * @param payload.accounts - An array of account objects to be created.
 * @param payload.accessToken - The access token for the bank connection (optional).
 * @param payload.enrollmentId - The enrollment ID for the bank connection (optional).
 * @param payload.referenceId - The reference ID for the bank connection (optional).
 * @param payload.teamId - The ID of the team associated with these accounts.
 * @param payload.userId - The ID of the user creating these accounts.
 * @param payload.provider - The provider of the bank connection (e.g., "gocardless", "teller", "plaid").
 * @returns A Promise that resolves to the created bank accounts, or undefined if no accounts were provided.
 */
export async function createBankAccounts(
  supabase: Client,
  {
    accounts,
    accessToken,
    enrollmentId,
    referenceId,
    teamId,
    userId,
    provider,
  }: CreateBankAccountsPayload,
) {
  // Get first account to create a bank connection
  const account = accounts?.at(0);

  if (!account) {
    return;
  }

  // NOTE: GoCardLess connection expires after 90-180 days
  const expiresAt =
    provider === "gocardless"
      ? addDays(
          new Date(),
          getAccessValidForDays({ institutionId: account.institution_id }),
        ).toDateString()
      : undefined;

  const bankConnection = await supabase
    .from("bank_connections")
    .upsert(
      {
        institution_id: account.institution_id,
        name: account.bank_name,
        logo_url: account.logo_url,
        team_id: teamId,
        provider,
        access_token: accessToken,
        enrollment_id: enrollmentId,
        reference_id: referenceId,
        expires_at: expiresAt,
      },
      {
        onConflict: "institution_id, team_id",
      },
    )
    .select()
    .single();

  return supabase
    .from("bank_accounts")
    .upsert(
      accounts.map(
        (account) => ({
          account_id: account.account_id,
          bank_connection_id: bankConnection?.data?.id,
          team_id: teamId,
          created_by: userId,
          name: account.name,
          currency: account.currency,
          enabled: account.enabled,
          type: account.type,
          balance: account.balance ?? 0,
        }),
        {
          onConflict: "account_id",
        },
      ),
    )
    .select();
}

type UpdateBankConnectionData = {
  id: string;
  referenceId?: string;
};

/**
 * Updates a bank connection with new expiration date and reference ID.
 *
 * @param supabase - The Supabase client instance.
 * @param data - An object containing the data to update the bank connection.
 * @param data.id - The ID of the bank connection to update.
 * @param data.referenceId - The new reference ID for the bank connection (optional).
 * @returns A Promise that resolves to the updated bank connection.
 */
export async function updateBankConnection(
  supabase: Client,
  data: UpdateBankConnectionData,
) {
  const { id, referenceId } = data;

  return await supabase
    .from("bank_connections")
    .update({
      expires_at: addDays(
        new Date(),
        getAccessValidForDays({ institutionId: id }),
      ).toDateString(),
      reference_id: referenceId,
    })
    .eq("id", id)
    .select()
    .single();
}

export async function deleteBankAccount(supabase: Client, id: string) {
  return await supabase
    .from("bank_accounts")
    .delete()
    .eq("id", id)
    .select()
    .single();
}

type UpdateBankAccountParams = {
  id: string;
  teamId: string;
  name: string;
  type: "depository" | "credit" | "other_asset" | "loan" | "other_liability";
};

/**
 * Updates a bank account with new information.
 *
 * @param supabase - The Supabase client instance.
 * @param params - An object containing the parameters to update the bank account.
 * @param params.id - The ID of the bank account to update.
 * @param params.teamId - The ID of the team associated with the bank account.
 * @param params.name - The new name for the bank account.
 * @param params.type - The new type for the bank account.
 * @returns A Promise that resolves to the updated bank account.
 */
export async function updateBankAccount(
  supabase: Client,
  params: UpdateBankAccountParams,
) {
  const { id, teamId, ...data } = params;

  return await supabase
    .from("bank_accounts")
    .update(data)
    .eq("id", id)
    .eq("team_id", teamId)
    .select()
    .single();
}
