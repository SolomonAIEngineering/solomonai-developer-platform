"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableToolbar = DataTableToolbar;
exports.CalendarDateRangePicker = CalendarDateRangePicker;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const react_icons_1 = require("@radix-ui/react-icons");
const date_fns_1 = require("date-fns");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const calendar_1 = require("../calendar");
const input_1 = require("../input");
const popover_1 = require("../popover");
const data_table_faceted_filter_1 = require("./data-table-faceted-filter");
const data_table_view_options_1 = require("./data-table-view-options");
function DataTableToolbar({ table, transactions, }) {
    const isFiltered = table.getState().columnFilters.length > 0;
    // get all personal finance categories from the transactions
    const personalFinanceCategories = transactions.map((data) => {
        return {
            label: data.personalFinanceCategoryPrimary ?? "",
            value: data.personalFinanceCategoryPrimary ?? "",
            icon: outline_1.BriefcaseIcon,
        };
    });
    // Remove duplicates based on the `value` property
    const uniquePersonalFinanceCategories = personalFinanceCategories.filter((category, index, self) => index === self.findIndex((c) => c.value === category.value));
    // get all merchant names from the transactions
    const merchantNames = transactions.map((data) => {
        return {
            label: data.merchantName ?? "",
            value: data.merchantName ?? "",
            icon: outline_1.BriefcaseIcon,
        };
    });
    // Remove duplicates based on the `value` property
    const uniqueMerchantNames = merchantNames.filter((merchant, index, self) => index === self.findIndex((m) => m.value === merchant.value));
    // get all the account ids from the transactions
    const accountIds = transactions.map((data) => {
        return {
            label: data.accountId ?? "",
            value: data.accountId ?? "",
            icon: outline_1.BriefcaseIcon,
        };
    });
    // Remove duplicates based on the `value` property
    const uniqueAccountIds = accountIds.filter((account, index, self) => index === self.findIndex((a) => a.value === account.value));
    const paymentChannels = transactions.map((data) => {
        return {
            label: data.paymentChannel ?? "",
            value: data.paymentChannel ?? "",
            icon: outline_1.BriefcaseIcon,
        };
    });
    // Remove duplicates based on the `value` property
    const uniquePaymentChannels = paymentChannels.filter((paymentChannel, index, self) => index === self.findIndex((p) => p.value === paymentChannel.value));
    return (<div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <input_1.Input placeholder="Filter transactions..." value={table.getColumn("name")?.getFilterValue() ?? ""} onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)} className="h-8 w-[150px] lg:w-[250px]"/>
        {table.getColumn("personalFinanceCategoryPrimary") && (<data_table_faceted_filter_1.DataTableFacetedFilter column={table.getColumn("personalFinanceCategoryPrimary")} title="Personal Finance Category" options={uniquePersonalFinanceCategories}/>)}
        {table.getColumn("merchantName") && (<data_table_faceted_filter_1.DataTableFacetedFilter column={table.getColumn("merchantName")} title="Merchant Name" options={uniqueMerchantNames}/>)}
        {table.getColumn("accountId") && (<data_table_faceted_filter_1.DataTableFacetedFilter column={table.getColumn("accountId")} title="Account" options={uniqueAccountIds}/>)}
        {table.getColumn("paymentChannel") && (<data_table_faceted_filter_1.DataTableFacetedFilter column={table.getColumn("paymentChannel")} title="Payment Channel" options={uniquePaymentChannels}/>)}
        <CalendarDateRangePicker className="hidden lg:block" table={table}/>
        {isFiltered && (<button_1.Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <react_icons_1.Cross2Icon className="ml-2 h-4 w-4"/>
          </button_1.Button>)}
      </div>
      <data_table_view_options_1.DataTableViewOptions table={table}/>
    </div>);
}
function CalendarDateRangePicker({ className, table, }) {
    const setSelectedDate = (selectedDate) => {
        setDate(selectedDate);
        if (undefined !== selectedDate) {
            table.getColumn("authorizedDate")?.setFilterValue(selectedDate.to);
        }
    };
    const [date, setDate] = react_1.default.useState({
        from: new Date(2023, 0, 20),
        to: (0, date_fns_1.addDays)(new Date(2023, 0, 20), 20),
    });
    return (<div className={(0, cn_1.cn)("grid gap-2", className)}>
      <popover_1.Popover>
        <popover_1.PopoverTrigger asChild>
          <button_1.Button id="date" variant={"outline"} className={(0, cn_1.cn)("w-[260px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <outline_1.CalendarIcon className="mr-2 h-4 w-4"/>
            {date?.from ? (date.to ? (<>
                  {(0, date_fns_1.format)(date.from, "LLL dd, y")} -{" "}
                  {(0, date_fns_1.format)(date.to, "LLL dd, y")}
                </>) : ((0, date_fns_1.format)(date.from, "LLL dd, y"))) : (<span>Pick a date</span>)}
          </button_1.Button>
        </popover_1.PopoverTrigger>
        <popover_1.PopoverContent className="w-auto p-0" align="end">
          <calendar_1.Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setSelectedDate} numberOfMonths={2}/>
        </popover_1.PopoverContent>
      </popover_1.Popover>
    </div>);
}
