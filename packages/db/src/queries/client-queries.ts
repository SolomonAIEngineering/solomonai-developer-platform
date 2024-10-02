import { createClient } from '@v1/db/client'
import { TransactionSchema } from '@v1/db/types'

export async function getTransactionsByBankAccountId({
  bankAccountId,
  limit,
}: {
  bankAccountId: string
  limit: number
}): Promise<TransactionSchema[] | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('bank_account_id', bankAccountId)
    .order('date', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching transactions:', error)
    return null
  }

  return data as TransactionSchema[]
}
