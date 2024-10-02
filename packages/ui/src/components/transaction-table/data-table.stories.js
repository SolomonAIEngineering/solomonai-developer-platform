"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const financial_data_generator_1 = require("../../lib/random/financial-data-generator");
const data_columns_1 = require("./data-columns");
const data_table_1 = require("./data-table");
const meta = {
    component: data_table_1.DataTable,
};
exports.default = meta;
const transactions = financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(100);
const txnWithProperDate = transactions.map((txn) => {
    return {
        ...txn,
        // randomly generate a date between 1/1/2020 and today
        authorizedDate: new Date(Math.random() *
            (new Date().getTime() - new Date(2023, 10, 29).getTime()) +
            new Date(2023, 10, 29).getTime()).toLocaleDateString(),
        // generate a random amount in the range of 100 to 10000
        amount: Math.floor(Math.random() * (10000 - 100) + 100),
        // generata a random set of tags which are random strigns
        tags: Array.from({ length: 5 }, () => Math.random().toString(36)),
        // generate a random transaction nae and emrchant name
        name: Math.random().toString(36),
        merchantName: Math.random().toString(36),
    };
});
exports.Default = {};
exports.Default.args = {
    data: txnWithProperDate,
    columns: data_columns_1.columns,
};
