"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditAccountMiniCard = exports.CreditAccountCard = void 0;
const react_1 = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const lucide_react_1 = require("lucide-react");
const financial_data_processor_1 = require("../../../lib/financial-data-processor");
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const cn_1 = require("../../../utils/cn");
const badge_1 = require("../../badge");
const button_1 = require("../../button");
const card_1 = require("../../card");
const account_balance_1 = require("../../charts/financials/account-balance");
const collapsible_1 = require("../../collapsible");
const hover_card_1 = require("../../hover-card");
const label_1 = require("../../label");
const tabs_1 = require("../../tabs");
/** @type {React.Context<CreditAccount>} */
const CreditAccountCardContext = (0, react_1.createContext)({});
const FinancialProfileContext = (0, react_1.createContext)({});
/**
 * Credit Account Card Component that displays the credit account information
 *
 * @param {{ creditAccount: any; financialProfile: any; institutionName: any; className: any; contextQuestions: any; enableDemoMode: any; children: any; historicalAccountBalance: any; }} param0
 * @param {*} param0.creditAccount
 * @param {*} param0.financialProfile
 * @param {*} param0.institutionName
 * @param {*} param0.className
 * @param {*} param0.contextQuestions
 * @param {*} param0.enableDemoMode
 * @param {*} param0.children
 * @param {*} param0.historicalAccountBalance
 * @returns {*}
 */
const CreditAccountCard = ({ creditAccount, financialProfile, institutionName, className, enableDemoMode, children, historicalAccountBalance, }) => {
    creditAccount = enableDemoMode
        ? financial_data_generator_1.FinancialDataGenerator.generateRandomCreditAccount()
        : creditAccount;
    return (<CreditAccountCardContext.Provider value={creditAccount}>
      <FinancialProfileContext.Provider value={financialProfile}>
        <div className={(0, cn_1.cn)("p-2", className)}>
          <card_1.CardHeader className="flex items-start gap-x-5 space-y-0">
            <div className="space-y-1">
              <card_1.CardTitle className="text-xs font-bold text-gray-600 dark:text-gray-200">
                $
                {financial_data_processor_1.FinancialDataProcessor.formatNumber(creditAccount.currentFunds ?? 0, 2)}
              </card_1.CardTitle>
              <card_1.CardTitle className="text-xs font-bold" style={{
            fontSize: "11px",
        }}>
                <hover_card_1.HoverCard>
                  <hover_card_1.HoverCardTrigger>
                    {" "}
                    {institutionName} Credit Card
                  </hover_card_1.HoverCardTrigger>
                  <hover_card_1.HoverCardContent className="rounded-2xl">
                    <CreditAccountMiniCard creditAccount={creditAccount} institutionName={institutionName} className="border-0 shadow-none"/>
                  </hover_card_1.HoverCardContent>
                </hover_card_1.HoverCard>
              </card_1.CardTitle>
              <div>
                <div className="flex flex-1 justify-start gap-2">
                  <badge_1.Badge className="border border-black bg-white font-bold text-background" style={{
            fontSize: "8px",
        }}>
                    {creditAccount.type}
                  </badge_1.Badge>
                  <badge_1.Badge className="border border-black bg-white text-background" style={{
            fontSize: "8px",
        }}>
                    Overdue: {creditAccount.isOverdue === false ? "No" : "Yes"}
                  </badge_1.Badge>
                </div>
              </div>
              <div>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-600 dark:text-gray-200">
                    Account Number:{" "}
                  </span>
                  <span className="text-xs font-bold">
                    {creditAccount.number}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label_1.Label className="text-2xl font-bold">
                  Currently owe: $
                  {financial_data_processor_1.FinancialDataProcessor.formatNumber(creditAccount.balance ?? 0, 2)}
                </label_1.Label>
                <p style={{
            fontSize: "10px",
        }} className="font-bold">
                  Card balance limit ${creditAccount.balanceLimit}
                </p>
                <p style={{
            fontSize: "10px",
        }} className="font-bold">
                  $
                  {financial_data_processor_1.FinancialDataProcessor.formatNumber(creditAccount.minimumPaymentAmount ?? 0, 2)}{" "}
                  due on{" "}
                  {financial_data_processor_1.FinancialDataProcessor.formatDate(creditAccount.nextPaymentDueDate ?? 0)}
                </p>
              </div>
            </div>
          </card_1.CardHeader>
          <card_1.CardContent>
            <tabs_1.Tabs defaultValue="details" className="min-w-[400px]">
              <tabs_1.TabsList className="py-2 font-bold">
                <tabs_1.TabsTrigger value="details">Details</tabs_1.TabsTrigger>
                {creditAccount.aprs && creditAccount.aprs.length > 0 && (<tabs_1.TabsTrigger value="apr">Apr</tabs_1.TabsTrigger>)}
              </tabs_1.TabsList>
              <tabs_1.TabsContent value="details">
                <CreditCardCollapsibleDetails creditAccount={creditAccount} className="py-2"/>
              </tabs_1.TabsContent>
              {creditAccount.aprs && creditAccount.aprs.length > 0 && (<tabs_1.TabsContent value="apr">
                  <CreditAccountApr aprs={creditAccount.aprs}/>
                </tabs_1.TabsContent>)}
            </tabs_1.Tabs>
          </card_1.CardContent>
          <card_1.CardFooter>
            <account_balance_1.AccountBalanceChart data={historicalAccountBalance ?? []} currency="USD"/>
          </card_1.CardFooter>
          {children}
        </div>
      </FinancialProfileContext.Provider>
    </CreditAccountCardContext.Provider>);
};
exports.CreditAccountCard = CreditAccountCard;
/**
 * Credit Account Apr Component that displays the credit account apr information
 *
 * @param {*} props
 * @returns {*}
 */
const CreditAccountApr = (props) => {
    const { aprs } = props;
    return (<div>
      <card_1.Card className="flex flex-col gap-3 rounded-lg p-3">
        <div>
          <div className="flex flex-row gap-2">
            <lucide_react_1.RocketIcon className="h-4 w-4"/>
            <p className="text-xs font-bold"> Card Aprs </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {aprs.map((apr, idx) => (<div className="flex flex-col" key={idx}>
              <div key={idx} className="flex flex-row gap-3">
                <p className="text-xs font-bold">
                  {apr.type &&
                financial_data_processor_1.FinancialDataProcessor.removeUnderScores(apr.type)}
                </p>
                <p className="text-xs font-bold">{apr.percentage}%</p>
              </div>
              <p className="text-xs">
                {apr.balanceSubjectToApr}
                <span className="text-xs"> of balance subject to apr</span>
              </p>
            </div>))}{" "}
        </div>
      </card_1.Card>
    </div>);
};
/**
 * Credit Account Mini Card Component that displays the credit account mini card information
 *
 * @param {*} props
 * @returns {*}
 */
const CreditAccountMiniCard = (props) => {
    const { creditAccount, institutionName, className } = props;
    return (<card_1.Card className={(0, cn_1.cn)("flex flex-col space-x-1 rounded-2xl bg-white text-secondary-foreground", className)}>
      <card_1.CardHeader>
        <div className="flex flex-1 justify-between">
          <p className="font-bold">{institutionName.toUpperCase()}</p>
          <div>
            <lucide_react_1.Wallet2Icon className="h-4 w-4"/>
          </div>
        </div>
      </card_1.CardHeader>
      <card_1.CardContent>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold">
            ${creditAccount.balance}{" "}
            <span className="text-xs">current balance</span>
          </p>
          <p className="text-md font-bold">
            ${creditAccount.minimumPaymentAmount}
            <span className="ml-2 text-xs">
              due on {creditAccount.nextPaymentDueDate}{" "}
            </span>
          </p>
        </div>
      </card_1.CardContent>
      <card_1.CardFooter>
        <div className="item-end flex flex-col justify-end">
          <p className="text-sm">{creditAccount.number} </p>
          <p className="text-xs">Account Number</p>
        </div>
      </card_1.CardFooter>
    </card_1.Card>);
};
exports.CreditAccountMiniCard = CreditAccountMiniCard;
/**
 * Credit Card Collapsible Details Component that displays the credit card collapsible details information
 * @param {*} props
 * @returns {*}
 */
const CreditCardCollapsibleDetails = (props) => {
    const { creditAccount, className } = props;
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    return (<collapsible_1.Collapsible open={isOpen} onOpenChange={setIsOpen} className={(0, cn_1.cn)("w-[350px] space-y-2", className)}>
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{creditAccount.name} details</h4>
        <collapsible_1.CollapsibleTrigger asChild>
          <button_1.Button variant="ghost" size="sm">
            <react_icons_1.CaretSortIcon className="h-4 w-4"/>
            <span className="sr-only">Toggle</span>
          </button_1.Button>
        </collapsible_1.CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        <div className="items-between flex flex-row justify-between">
          <p className="text-xs"> Last Payed</p>
          <p className="text-xs">
            {" "}
            {financial_data_processor_1.FinancialDataProcessor.formatDate(creditAccount.lastPaymentDate ?? "")}{" "}
          </p>
        </div>
      </div>
      <collapsible_1.CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="items-between flex flex-row justify-between">
            <p className="text-xs"> Last Issued</p>
            <p className="text-xs">
              {" "}
              {financial_data_processor_1.FinancialDataProcessor.formatDate(creditAccount.lastStatementIssueDate ?? "")}{" "}
            </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="items-between flex flex-row justify-between">
            <p className="text-xs"> Last Statement Balance</p>
            <p className="text-xs">
              {" "}
              $
              {financial_data_processor_1.FinancialDataProcessor.formatNumber(creditAccount.lastStatementBalance ?? 0, 2)}{" "}
            </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="items-between flex flex-row justify-between">
            <p className="text-xs"> Last Payment Amount</p>
            <p className="text-xs">
              {" "}
              $
              {financial_data_processor_1.FinancialDataProcessor.formatNumber(creditAccount.lastPaymentAmount ?? 0, 2)}{" "}
            </p>
          </div>
        </div>
      </collapsible_1.CollapsibleContent>
    </collapsible_1.Collapsible>);
};
