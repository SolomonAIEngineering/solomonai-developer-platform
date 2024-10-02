"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedAccountCard = void 0;
const card_1 = require("../../card");
/**
 * A component that displays the linked account information including the institution name
 * and the total balance of all bank accounts associated with the linked account.
 *
 * @param {LinkedAccountCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered LinkedAccountCard component.
 */
const LinkedAccountCard = ({ link }) => {
    const { plaidLink, bankAccounts } = link;
    /**
     * Computes the sum of all bank accounts under this linked account.
     *
     * @param {Array} bankAccounts - The array of bank accounts.
     * @returns {number} The total balance of all bank accounts.
     */
    const totalBankAccountBalance = bankAccounts?.reduce((acc, account) => acc + (account.balance ?? 0), 0) ??
        0;
    /**
     * Rounds up a number to two decimal places.
     *
     * @param {number} num - The number to round up.
     * @returns {number} The number rounded up to two decimal places.
     */
    const roundUpToTwoDecimalPlaces = (num) => Math.ceil(num * 100) / 100;
    return (<card_1.Card>
      <card_1.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <card_1.CardTitle className="text-sm font-bold">
          {plaidLink?.institutionName}
        </card_1.CardTitle>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </card_1.CardHeader>
      <card_1.CardContent>
        <div className="text-lg">
          Cash Balance{" "}
          <span className="font-bold">
            ${roundUpToTwoDecimalPlaces(totalBankAccountBalance)}
          </span>
        </div>
        {/* Uncomment and update the below line if you want to display the percentage change */}
        {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
      </card_1.CardContent>
    </card_1.Card>);
};
exports.LinkedAccountCard = LinkedAccountCard;
