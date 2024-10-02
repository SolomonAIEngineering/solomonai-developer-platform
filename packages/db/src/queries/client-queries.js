"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsByBankAccountId = getTransactionsByBankAccountId;
const client_1 = require("@v1/db/client");
async function getTransactionsByBankAccountId({ bankAccountId, limit, }) {
    const supabase = (0, client_1.createClient)();
    const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('bank_account_id', bankAccountId)
        .order('date', { ascending: false })
        .limit(limit);
    if (error) {
        console.error('Error fetching transactions:', error);
        return null;
    }
    return data;
}
