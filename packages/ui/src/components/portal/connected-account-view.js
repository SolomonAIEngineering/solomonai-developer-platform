"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedAccountSummary = void 0;
const react_1 = require("react");
const bs_1 = require("react-icons/bs");
const financial_data_generator_1 = require("../../lib/random/financial-data-generator");
const card_1 = require("../card");
const credit_card_1 = require("../cards/credit-card");
const bar_chart_1 = require("../charts/base/bar-chart");
const tabs_1 = require("../tabs");
// Function to calculate cash balance across accounts
const calculateCashBalance = (links, accountType) => {
    return links
        ? links.reduce((total, link) => {
            const accounts = link[accountType];
            if (accounts) {
                return (total +
                    accounts.reduce((acc, account) => acc + (account.balance || 0), 0));
            }
            return total;
        }, 0)
        : 0;
};
// Function to calculate outstanding balance for mortgage accounts
const calculateOutstandingBalance = (links, accountType) => {
    return links
        ? links.reduce((total, link) => {
            const accounts = link[accountType];
            if (accounts) {
                return (total +
                    accounts.reduce((acc, account) => {
                        if (accountType === "mortgageAccounts") {
                            return acc + (account.originationPrincipalAmount || 0);
                        }
                        else if (accountType === "studentLoanAccounts") {
                            const studentLoanAccount = account;
                            return (acc +
                                (studentLoanAccount.originationPrincipalAmount || 0) +
                                (studentLoanAccount.outstandingInterestAmount || 0));
                        }
                        return acc;
                    }, 0));
            }
            return total;
        }, 0)
        : 0;
};
// Component to display connected account summary
const ConnectedAccountSummary = ({ financialProfile, financialContext, name, demoMode = false }) => {
    (0, react_1.useMemo)(() => {
        if (demoMode || !financialProfile || !financialContext) {
            financialProfile = financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile();
            financialContext = financial_data_generator_1.FinancialDataGenerator.generateFinancialContext();
        }
    }, [financialProfile, financialContext, demoMode]);
    // Calculate balances and outstanding amounts
    const cashBalanceAcrossBankAccts = calculateCashBalance(financialProfile?.link, "bankAccounts");
    const cashBalanceAcrossInvestmentAccts = calculateCashBalance(financialProfile?.link, "investmentAccounts");
    const cashBalanceAcrossCreditAccts = calculateCashBalance(financialProfile?.link, "creditAccounts");
    const outstandingBalanceAcrossMortgageAccts = calculateOutstandingBalance(financialProfile?.link, "mortgageAccounts");
    const outstandingBalanceAcrossStudentLoanAccts = calculateOutstandingBalance(financialProfile?.link, "studentLoanAccounts");
    const debts = outstandingBalanceAcrossStudentLoanAccts +
        outstandingBalanceAcrossMortgageAccts +
        cashBalanceAcrossCreditAccts;
    const assets = cashBalanceAcrossBankAccts + cashBalanceAcrossInvestmentAccts;
    const expense = financialContext?.expenses?.[0]?.averageMonthlyDiscretionarySpending || 0;
    const income = financialContext?.income?.[0]?.incomeLastMonth || 0;
    const topPaymentChannel = financialContext?.paymentChannels?.[0]?.paymentChannel || "None";
    const numberOfConnectedAccounts = (financialContext?.bankAccounts?.length ?? 0) +
        (financialContext?.creditAccounts?.length ?? 0) +
        (financialContext?.investmentAccounts?.length ?? 0) +
        (financialContext?.mortgageLoanAccounts?.length ?? 0) +
        (financialContext?.studentLoanAccounts?.length ?? 0);
    const stats = [
        {
            id: 1,
            name: "Connected Accounts",
            value: numberOfConnectedAccounts,
        },
        {
            id: 2,
            name: "Money Out This Month",
            value: `$${expense.toFixed(2)}`,
        },
        {
            id: 3,
            name: "Money In This Month",
            value: `$${income.toFixed(2)}`,
        },
        { id: 4, name: "Top Payment Channel", value: `${topPaymentChannel}` },
        { id: 5, name: "Total Debts", value: `$${debts.toFixed(2)}` },
        { id: 5, name: "Total Assets", value: `$${assets.toFixed(2)}` },
    ];
    return (<card_1.Card className="rounded-2xl w-full">
      <div className="mx-auto w-full p-6">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <div className="flex flex-row justify-between">
            <p className="text-base font-bold leading-7 text-blue-800 md:pt-[10%]">
              Solomon AI
            </p>
          </div>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Your financial command center, {name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/3">
            Your Personalized Command Center for Wealth Management and Financial
            Freedom
          </p>
        </div>
        <div className="pt-[2%]">
          <tabs_1.Tabs defaultValue="accounts" className="w-full">
            <tabs_1.TabsList className="w-fit">
              <tabs_1.TabsTrigger value="accounts">Accounts</tabs_1.TabsTrigger>
              <tabs_1.TabsTrigger value="income">Net Income Over Time</tabs_1.TabsTrigger>
              <tabs_1.TabsTrigger value="expense">Net Expenses Over Time</tabs_1.TabsTrigger>
            </tabs_1.TabsList>
            <tabs_1.TabsContent value="accounts">
              <ConnectedAccounts financialProfile={financialProfile} financialContext={financialContext}/>
            </tabs_1.TabsContent>
            <tabs_1.TabsContent value="expense">
              <card_1.Card className="border-4 border-gray-100 p-[3%] shadow-md">
                <card_1.CardHeader className="flex flex-col gap-2">
                  <card_1.CardTitle>Expenses</card_1.CardTitle>
                  <card_1.CardDescription className="max-w-xl">
                    Effective expense management in an evolving business venture
                    is crucial as it directly impacts profitability and
                    financial stability. By carefully monitoring and adjusting
                    expenses in response to market and operational changes,
                    businesses can optimize resource allocation, ensuring
                    long-term growth and competitive advantage.
                  </card_1.CardDescription>
                </card_1.CardHeader>
                <card_1.CardContent className="space-y-2 p-[1%]">
                  <bar_chart_1.BarChart currency={""} data={[]} disabled={true}/>
                </card_1.CardContent>
              </card_1.Card>
            </tabs_1.TabsContent>
            <tabs_1.TabsContent value="income">
              <card_1.Card className="border-4 border-gray-100 p-[3%] shadow-md">
                <card_1.CardHeader className="flex flex-col gap-2">
                  <card_1.CardTitle>Income</card_1.CardTitle>
                  <card_1.CardDescription className="max-w-xl">
                    Efficient income management is vital in an evolving
                    business, as it determines the venture`&rsquo;`s growth
                    potential and financial health. By strategically maximizing
                    and diversifying revenue streams, a business can bolster its
                    resilience against market fluctuations and secure its path
                    to sustained success.
                  </card_1.CardDescription>
                </card_1.CardHeader>
                <card_1.CardContent className="space-y-2 p-[1%]">
                  <bar_chart_1.BarChart currency={""} data={[]} disabled={true}/>
                </card_1.CardContent>
              </card_1.Card>
            </tabs_1.TabsContent>
          </tabs_1.Tabs>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-6">
        {stats.map((stat, idx) => (<div key={idx} className="flex flex-col bg-gray-400/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-foreground/3">
              {stat.name}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
              {stat.value}
            </dd>
          </div>))}
      </dl>
    </card_1.Card>);
};
exports.ConnectedAccountSummary = ConnectedAccountSummary;
const ConnectedAccounts = ({ financialProfile, financialContext, }) => {
    (0, react_1.useMemo)(() => {
        if (!financialProfile || !financialContext) {
            financialProfile = financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile();
            financialContext = financial_data_generator_1.FinancialDataGenerator.generateFinancialContext();
        }
    }, [financialProfile, financialContext]);
    const linkedAccounts = financialProfile?.link;
    const hasLinkedAccounts = linkedAccounts && linkedAccounts.length > 0;
    // return null if no linked accounts
    if (!hasLinkedAccounts) {
        return <div></div>;
    }
    const creditCardToInstitutionNameMap = linkedAccounts.reduce((acc, card) => {
        if (card.creditAccounts && card.institutionName) {
            acc[card.institutionName] = card.creditAccounts;
        }
        return acc;
    }, {});
    const allBankAccounts = linkedAccounts.flatMap((link) => link.bankAccounts || []);
    const allCreditAccounts = linkedAccounts.flatMap((link) => link.creditAccounts || []);
    return (<div className="scrollbar-hide overflow-hidden rounded-2xl bg-white p-5">
      <tabs_1.Tabs defaultValue="bankaccounts">
        <tabs_1.TabsList>
          <tabs_1.TabsTrigger value="bankaccounts">Bank Accounts</tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="creditaccounts">Credit Accounts</tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="creditaccounts" className="w-fit overflow-auto py-2 max-w-6xl">
          <div className="grid md:flex md:flex-row md:gap-2">
            {allCreditAccounts.length === 0 ? (<div className="flex flex-row gap-1 p-[3%]">
                <div className="flex flex-1 gap-3">
                  <bs_1.BsExclamation className="h-8 w-8"/>
                  <p className="text-sm font-bold">
                    No Connected Credit Accounts
                  </p>
                </div>
              </div>) : (allCreditAccounts.map((account) => {
            return (<div key={account.id}>
                    {/* <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-xs">
                      <ArrowLeftStartOnRectangleIcon className="w-5 h-5 mr-2" />
                      View More{' '}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-5 border-4 border-gray-200 rounded-2xl flex flex-col justify-between md:min-w-[80%] md:max-h-[70%] md:p-20 overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{account.name}</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you are done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="w-full gap-4 py-4">
                      <CreditAccountSingleAccountView
                        account={account}
                        historicalAccountBalance={[]}
                        userName={''}
                        addGoalCallback={function (): void { }}
                        addMilestoneCallback={function (): void { }}
                        className="w-[100%] bg-gray-50 text-foreground md:p-5"
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog> */}
                    <credit_card_1.CreditCard cardholderName={account.name || ""} cardNumber={account.number || ""} expiryDate="xxxx" cvv="xxx"/>
                  </div>);
        }))}
          </div>
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="bankaccounts" className="overflow-auto py-2 max-w-6xl">
          <div className="grid md:flex md:flex-row md:gap-2">
            {allBankAccounts.length === 0 ? (<div className="flex flex-row gap-1 p-[3%]">
                <p className="p-3 text-xl font-bold">
                  No Connected Bank Accounts
                </p>

                {/* <ConnectPlaidAccountButtonMemoized
              title={'Connect Credit Acount'}
              className="text-xs"
            /> */}
              </div>) : (allBankAccounts.map((account) => {
            return (<div key={account.id}>
                    {/* <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-xs">
                      <ArrowLeftStartOnRectangleIcon className="w-5 h-5 mr-2" />
                      View More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-5 border-4 border-gray-200 rounded-2xl flex flex-col justify-between md:min-w-[90%] md:max-h-[90%] md:p-20 overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{account.name}</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you are done.
                      </DialogDescription>
                    </DialogHeader>
                    <BankAccountView
                      account={account}
                      historicalAccountBalance={[]}
                      userName={''}
                      addGoalCallback={function (): void { }}
                      addMilestoneCallback={function (): void { }}
                      className="w-full p-5 text-foreground bg-gray-50"
                    />
                    <DialogFooter>
                      <span className="text-sm">
                        Account {account.name}
                      </span>
                    </DialogFooter>
                  </DialogContent>
                </Dialog> */}
                    <div className="w-full ">
                      <credit_card_1.CreditCard cardholderName={account.name || ""} cardNumber={account.number || ""} expiryDate={"xx/xx"} cvv={"xxx"}/>
                    </div>
                  </div>);
        }))}
          </div>
        </tabs_1.TabsContent>
      </tabs_1.Tabs>
    </div>);
};
