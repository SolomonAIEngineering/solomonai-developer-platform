"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFinancialData = void 0;
const react_1 = require("react");
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const useFinancialData = (financialProfile, financialContext, demoMode = false) => {
    return (0, react_1.useMemo)(() => {
        if (demoMode || !financialProfile || !financialContext) {
            financialProfile = financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile();
            financialContext = financial_data_generator_1.FinancialDataGenerator.generateFinancialContext();
        }
        const linkedInstitutions = financialProfile.link || [];
        const linkedInstitutionNames = linkedInstitutions.map((link) => link.institutionName ? " " + link.institutionName.toLowerCase() : "");
        const allAccounts = [
            ...linkedInstitutions.flatMap((link) => link.bankAccounts || []),
            ...linkedInstitutions.flatMap((link) => link.creditAccounts || []),
            ...linkedInstitutions.flatMap((link) => link.investmentAccounts || []),
            ...linkedInstitutions.flatMap((link) => link.mortgageAccounts || []),
            ...linkedInstitutions.flatMap((link) => link.studentLoanAccounts || []),
        ];
        const numConnectedAccounts = allAccounts.length;
        const stats = [
            { id: 1, name: "Connected Accounts", value: numConnectedAccounts },
            {
                id: 2,
                name: "Number Of Linked Institutions",
                value: `${linkedInstitutions.length}`,
            },
            {
                id: 3,
                name: "Linked Institutions",
                value: `${linkedInstitutionNames}`,
            },
        ];
        return {
            linkedInstitutions,
            linkedInstitutionNames,
            numConnectedAccounts,
            stats,
        };
    }, [financialProfile, financialContext, demoMode]);
};
exports.useFinancialData = useFinancialData;
