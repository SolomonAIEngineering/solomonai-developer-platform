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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.apps = void 0;
const config_1 = __importDefault(require("./accounting/clear-books/config"));
const config_2 = __importDefault(require("./accounting/dynamics-365-bc/config"));
const config_3 = __importDefault(require("./accounting/dynamics-365-fo/config"));
const config_4 = __importDefault(require("./accounting/free-agent/config"));
const config_5 = __importDefault(require("./accounting/fresh-books/config"));
const config_6 = __importDefault(require("./accounting/money-bird/config"));
const config_7 = __importDefault(require("./accounting/oracle-netsuite/config"));
const config_8 = __importDefault(require("./accounting/quick-books/config"));
const config_9 = __importDefault(require("./accounting/sage-intacct/config"));
const config_10 = __importDefault(require("./accounting/sage/config"));
const config_11 = __importDefault(require("./accounting/wave/config"));
const config_12 = __importDefault(require("./accounting/workday/config"));
const config_13 = __importDefault(require("./accounting/xero/config"));
const config_14 = __importDefault(require("./accounting/zoho/config"));
const config_15 = __importDefault(require("./assistant/microsoft-teams/config"));
const config_16 = __importDefault(require("./assistant/notion/config"));
const config_17 = __importDefault(require("./assistant/slack/config"));
// Add new imports for Banking integrations
const config_18 = __importDefault(require("./banking/amazon/config"));
const config_19 = __importDefault(require("./banking/ebay/config"));
const config_20 = __importDefault(require("./banking/etsy/config"));
const config_21 = __importDefault(require("./banking/paypal/config"));
const config_22 = __importDefault(require("./banking/shopify/config"));
const config_23 = __importDefault(require("./banking/square/config"));
const config_24 = __importDefault(require("./banking/stripe/config"));
const config_25 = __importDefault(require("./banking/venmo/config"));
// Add new imports for CRM integrations
const config_26 = __importDefault(require("./crm/accelo/config"));
const config_27 = __importDefault(require("./crm/active-campaign/config"));
const config_28 = __importDefault(require("./crm/affinity/config"));
const config_29 = __importDefault(require("./crm/capsule/config"));
const config_30 = __importDefault(require("./crm/close/config"));
const config_31 = __importDefault(require("./crm/copper/config"));
const config_32 = __importDefault(require("./crm/dynamics-365/config"));
const config_33 = __importDefault(require("./crm/hubspot/config"));
const config_34 = __importDefault(require("./crm/insightly/config"));
const config_35 = __importDefault(require("./crm/keap/config"));
const config_36 = __importDefault(require("./crm/nutshell/config"));
const config_37 = __importDefault(require("./crm/pipedrive/config"));
const config_38 = __importDefault(require("./crm/pipeliner/config"));
const config_39 = __importDefault(require("./crm/salesforce/config"));
const config_40 = __importDefault(require("./crm/sugar-crm/config"));
const config_41 = __importDefault(require("./crm/teamleader/config"));
const config_42 = __importDefault(require("./crm/teamwork-crm/config"));
const config_43 = __importDefault(require("./crm/vtiger/config"));
const config_44 = __importDefault(require("./crm/zendesk/config"));
const config_45 = __importDefault(require("./crm/zoho-crm/config"));
// Update Payroll integrations imports
const adp_1 = __importDefault(require("./payroll/adp"));
const bamboo_hr_1 = __importDefault(require("./payroll/bamboo-hr"));
const deel_1 = __importDefault(require("./payroll/deel"));
const gusto_1 = __importDefault(require("./payroll/gusto"));
const paychex_1 = __importDefault(require("./payroll/paychex"));
const sage_1 = __importDefault(require("./payroll/sage"));
const workday_1 = __importDefault(require("./payroll/workday"));
const zoho_people_1 = __importDefault(require("./payroll/zoho-people"));
const types = __importStar(require("./types"));
exports.types = types;
// Partition apps by category
exports.apps = {
    [types.IntegrationCategory.Accounting]: [
        config_8.default,
        config_1.default,
        config_4.default,
        config_5.default,
        config_2.default,
        config_3.default,
        config_6.default,
        config_7.default,
        config_10.default,
        config_9.default,
        config_11.default,
        config_12.default,
        config_13.default,
        config_14.default,
    ],
    [types.IntegrationCategory.Assistant]: [
        config_17.default,
        config_16.default,
        config_15.default,
    ],
    [types.IntegrationCategory.Payroll]: [
        zoho_people_1.default,
        bamboo_hr_1.default,
        deel_1.default,
        adp_1.default,
        gusto_1.default,
        paychex_1.default,
        sage_1.default,
        workday_1.default,
    ],
    [types.IntegrationCategory.Banking]: [
        config_24.default,
        config_23.default,
        config_25.default,
        config_18.default,
        config_19.default,
        config_20.default,
        config_21.default,
        config_22.default,
    ],
    [types.IntegrationCategory.CRM]: [
        config_26.default,
        config_27.default,
        config_28.default,
        config_29.default,
        config_30.default,
        config_31.default,
        config_43.default,
        config_33.default,
        config_34.default,
        config_35.default,
        config_32.default,
        config_36.default,
        config_37.default,
        config_44.default,
        config_38.default,
        config_39.default,
        config_40.default,
        config_41.default,
        config_42.default,
        config_45.default,
    ],
    [types.IntegrationCategory.Notification]: [],
};
