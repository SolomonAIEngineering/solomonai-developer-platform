"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialPortalOverview = void 0;
const react_1 = __importDefault(require("react"));
const FreeTierView_1 = require("./components/FreeTierView");
const LinkedAccountsOverview_1 = require("./components/LinkedAccountsOverview");
const PortalHeader_1 = require("./components/PortalHeader");
const StatsOverview_1 = require("./components/StatsOverview");
const useFinancialData_1 = require("./hooks/useFinancialData");
const FinancialPortalOverview = ({ financialProfile, financialContext, demoMode = false, baseTierNumberOfConnectedAccounts = 0, isFreeTier = false, title, description, }) => {
    const { linkedInstitutions, linkedInstitutionNames, numConnectedAccounts, stats, } = (0, useFinancialData_1.useFinancialData)(financialProfile, financialContext, demoMode);
    if (isFreeTier && baseTierNumberOfConnectedAccounts > 0) {
        return (<FreeTierView_1.FreeTierView baseTierNumberOfConnectedAccounts={baseTierNumberOfConnectedAccounts}/>);
    }
    return (<div className="bg-background text-foreground">
      <div className="mx-auto w-full">
        <PortalHeader_1.PortalHeader linkedInstitutionsCount={linkedInstitutions.length} numConnectedAccounts={numConnectedAccounts} title={title} description={description}/>
        <LinkedAccountsOverview_1.LinkedAccountsOverview linkedInstitutions={linkedInstitutions}/>
        <StatsOverview_1.StatsOverview stats={stats}/>
      </div>
    </div>);
};
exports.FinancialPortalOverview = FinancialPortalOverview;
