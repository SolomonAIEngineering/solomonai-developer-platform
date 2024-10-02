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
exports.useCalendar = exports.PlannerProvider = void 0;
const react_1 = __importStar(require("react"));
const date_fns_1 = require("date-fns");
const utils_1 = require("../lib/utils");
const defaultContextValue = {
    viewMode: "week", // default starting view
    timeLabels: [],
    dateRange: { from: (0, date_fns_1.startOfWeek)(new Date()), to: (0, date_fns_1.endOfDay)(new Date()) },
    currentDateRange: { from: (0, date_fns_1.startOfDay)(new Date()), to: (0, date_fns_1.endOfDay)(new Date()) },
    setDateRange: (dateRange) => {
        console.log(dateRange);
    },
};
const PlannerContext = (0, react_1.createContext)(defaultContextValue);
const PlannerProvider = ({ children, }) => {
    const [dateRange, setDateRange] = (0, react_1.useState)({
        from: (0, date_fns_1.startOfDay)(new Date()),
        to: (0, date_fns_1.endOfDay)(new Date()),
    });
    const viewMode = (0, react_1.useMemo)(() => {
        const days = (Number(dateRange.to) - Number(dateRange.from)) / (1000 * 3600 * 24);
        if (days < 1)
            return "day";
        if (days <= 7)
            return "week";
        if (days <= 31)
            return "month";
        return "year";
    }, [dateRange]);
    const timeLabels = (0, react_1.useMemo)(() => {
        return (0, utils_1.getLabelsForView)(viewMode, {
            start: dateRange.from ?? (0, date_fns_1.startOfDay)(new Date()),
            end: dateRange.to ?? (0, date_fns_1.endOfDay)(new Date()),
        });
    }, [viewMode, dateRange]);
    const value = {
        timeLabels,
        dateRange,
        setDateRange,
        viewMode: viewMode,
        currentDateRange: dateRange,
    };
    return (<PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>);
};
exports.PlannerProvider = PlannerProvider;
const useCalendar = () => {
    return (0, react_1.useContext)(PlannerContext);
};
exports.useCalendar = useCalendar;
