"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditAccountsOverviewSummary = void 0;
const react_1 = require("react");
const react_icons_1 = require("@radix-ui/react-icons");
const financial_data_generator_1 = require("../../lib/random/financial-data-generator");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const card_1 = require("../card");
const credit_account_card_1 = require("../cards/credit-account-card");
const dialog_1 = require("../dialog");
const tabs_1 = require("../tabs");
const transaction_table_1 = require("../transaction-table");
/**
 * CreditAccountsOverviewSummary component displays an overview of all bank accounts.
 * It shows a header with the total count of bank accounts and a list of bank account cards.
 *
 * @param props - The props for the component.
 * @returns A React functional component.
 */
const CreditAccountsOverviewSummary = ({ financialProfile, financialContext, className, transactions, demoMode = false, }) => {
    if (!financialProfile || !financialContext || demoMode) {
        financialProfile = financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile();
        financialContext = financial_data_generator_1.FinancialDataGenerator.generateFinancialContext();
        transactions = financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(50);
    }
    // get the current financial profile
    const linkedInstitutions = financialProfile.link !== undefined ? financialProfile.link : [];
    // get all bank accounts from link
    let CreditAccounts = linkedInstitutions
        ? linkedInstitutions
            .filter((link) => link.creditAccounts !== undefined)
            .map((link) => link.creditAccounts)
            .flat()
        : [];
    const validAccounts = CreditAccounts.filter((account) => account !== undefined);
    const [isDialogOpen, setIsDialogOpen] = (0, react_1.useState)(false);
    if (validAccounts.length === 0) {
        return (<card_1.Card className="p-[2%]">
        <card_1.CardHeader>
          <h3 className="text-3xl font-bold">Bank Accounts</h3>
        </card_1.CardHeader>
        <card_1.CardContent>
          <p>No bank accounts connected.</p>
        </card_1.CardContent>
      </card_1.Card>);
    }
    return (<div className={(0, cn_1.cn)("h-screen w-full bg-background text-foreground", className)}>
      <card_1.Card className="p-[2%] h-full flex flex-col">
        <h3 className="text-3xl font-bold mb-4">Credit Accounts</h3>
        <div className="flex-grow overflow-hidden">
          <tabs_1.Tabs defaultValue={validAccounts[0]?.name} className="flex h-full">
            <tabs_1.TabsList className="p-[1%] flex-col items-start justify-start h-[40%] overflow-y-auto scrollbar-hide w-fit mr-4 bg-black text-white rounded-2xl">
              {validAccounts.map((account, idx) => (<tabs_1.TabsTrigger value={account.name} className="text-xs font-bold text-white text-left mb-2 w-full rounded-2xl" key={idx}>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p>{account.name}</p>
                    <span style={{ fontSize: "0.5rem" }}>{account.name}</span>
                  </div>
                </tabs_1.TabsTrigger>))}
            </tabs_1.TabsList>
            <card_1.Card className="overflow-y-auto scrollbar-hide w-full">
              {validAccounts.map((account, idx) => (<tabs_1.TabsContent value={account.name} key={idx} className="px-4">
                  <credit_account_card_1.CreditAccountCard className="border-none bg-background text-foreground shadow-none" financialProfile={financialProfile} creditAccount={account} institutionName={""}/>
                  <dialog_1.Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <dialog_1.DialogTrigger asChild>
                      <button_1.Button className="mt-4 px-4 py-2" variant="outline">
                        View Transactions
                        <react_icons_1.ArrowRightIcon className="ml-2"/>
                      </button_1.Button>
                    </dialog_1.DialogTrigger>
                    <dialog_1.DialogContent className="h-[80%] w-full min-w-[90%] overflow-y-auto scrollbar-hide p-[2%] rounded-2xl">
                      <h2 className="pt-6 text-lg font-bold tracking-tight">
                        {account.name?.toUpperCase()}{" "}
                        <span className="ml-1 text-xs"> {account.number}</span>
                      </h2>
                      <p className="pb-5 text-4xl font-bold tracking-tight">
                        ${account.balance?.toFixed(2)}{" "}
                        <span className="ml-1 text-xs"> {account.subtype}</span>
                      </p>
                      {transactions && (<div className="flex flex-col gap-3 p-[2%]">
                          <h2 className="ml-5 text-3xl font-bold tracking-tight">
                            Most Recent Transactions{" "}
                            <span className="ml-1 text-xs">
                              ({transactions.length}){" "}
                            </span>
                          </h2>
                          <transaction_table_1.DataTable data={transactions} columns={transaction_table_1.columns}/>
                        </div>)}
                    </dialog_1.DialogContent>
                  </dialog_1.Dialog>
                </tabs_1.TabsContent>))}
            </card_1.Card>
          </tabs_1.Tabs>
        </div>
      </card_1.Card>
    </div>);
};
exports.CreditAccountsOverviewSummary = CreditAccountsOverviewSummary;
