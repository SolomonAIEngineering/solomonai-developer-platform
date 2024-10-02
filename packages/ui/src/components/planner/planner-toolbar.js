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
const react_1 = __importStar(require("react"));
const date_fns_1 = require("date-fns");
const planner_context_1 = require("../../contexts/planner-context");
const planner_data_context_1 = require("../../contexts/planner-data-context");
const cn_1 = require("../../utils/cn");
const date_range_picker_1 = require("../date-range-picker");
const add_appointment_dialog_1 = __importDefault(require("./add-appointment-dialog"));
const CalendarToolbar = ({ className, ...props }) => {
    const { setDateRange } = (0, planner_context_1.useCalendar)();
    const { addResource, addAppointment } = (0, planner_data_context_1.useData)();
    const [range, setRange] = (0, react_1.useState)({
        from: (0, date_fns_1.startOfWeek)(new Date(), {
            locale: { options: { weekStartsOn: 1 } },
        }),
        to: (0, date_fns_1.endOfWeek)(new Date()),
    });
    const handleDateRangeUpdate = (range) => {
        const from = range.from;
        const to = range.to ?? (0, date_fns_1.endOfDay)(range.from);
        setDateRange({
            from: from,
            to: to,
        });
    };
    (0, react_1.useEffect)(() => {
        setDateRange(range);
    }, [range]);
    return (<div className={(0, cn_1.cn)("flex items-center justify-end space-x-2", className)} {...props}>
      <add_appointment_dialog_1.default />
      <date_range_picker_1.DateRangePicker onUpdate={(value) => handleDateRangeUpdate(value.range)} initialDateFrom={range.from} initialDateTo={range.to} align="start" showCompare={false}/>
    </div>);
};
exports.default = react_1.default.memo(CalendarToolbar);
