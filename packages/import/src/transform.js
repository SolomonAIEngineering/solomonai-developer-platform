"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = transform;
const change_case_1 = require("change-case");
const uuid_1 = require("uuid");
const utils_1 = require("./utils");
function transform({ transaction, inverted, timezone, dateAdjustment, }) {
    return {
        internal_id: `${transaction.teamId}_${(0, uuid_1.v4)()}`,
        team_id: transaction.teamId,
        status: 'posted',
        method: 'other',
        date: (0, utils_1.formatDate)(transaction.date, timezone, dateAdjustment),
        amount: (0, utils_1.formatAmountValue)({ amount: transaction.amount, inverted }),
        name: transaction?.description && (0, change_case_1.capitalCase)(transaction.description),
        manual: true,
        category_slug: (0, utils_1.formatAmountValue)({ amount: transaction.amount, inverted }) > 0
            ? 'income'
            : null,
        bank_account_id: transaction.bankAccountId,
        currency: transaction.currency,
    };
}
