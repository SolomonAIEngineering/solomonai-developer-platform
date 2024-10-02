"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalHeader = void 0;
const react_1 = __importDefault(require("react"));
const PortalHeader = ({ linkedInstitutionsCount, numConnectedAccounts, title = "Financial Portal", description = "Your Premier Gateway to Wealth Mastery and Financial Liberation.", }) => (<>
    <div className="flex flex-row justify-between">
      <p className="text-base font-semibold leading-7 text-blue-600 md:pt-[5%]">
        Solomon AI
      </p>
    </div>
    <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
      {title}
      <span className="font-base ml-4 text-sm">
        {linkedInstitutionsCount} Linked{" "}
        {linkedInstitutionsCount === 1 ? "Account" : "Accounts"}
      </span>
    </h2>
    <p className="mt-6 text-lg leading-8 text-foreground/3">{description}</p>
    <div>
      <h2 className="py-5 text-2xl font-bold tracking-tight">
        Overview{" "}
        <span className="ml-1 text-xs">
          {numConnectedAccounts}{" "}
          {numConnectedAccounts === 1 ? "Account" : "Accounts"}
        </span>
      </h2>
    </div>
  </>);
exports.PortalHeader = PortalHeader;
