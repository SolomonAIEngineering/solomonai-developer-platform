"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartContainer = void 0;
const react_1 = __importDefault(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const recharts_1 = require("recharts");
const assistant_modal_1 = require("../../assistant-modal");
const button_1 = require("../../button");
const index_1 = require("../../calendar/index");
const ChartContainer = ({ data, dataSet, setDataSet, height, earliestDate, latestDate, filterDataByDateRange, enableAssistantMode = false, children, disabled = false, }) => {
    const disabledClassName = disabled ? "skeleton-box opacity-15" : "";
    return (<div className={`flex flex-col gap-2`}>
      <div className="flex items-center gap-2">
        <index_1.CalendarDatePicker date={{ from: earliestDate, to: latestDate }} onDateSelect={(range) => {
            filterDataByDateRange(range);
        }}/>
        {dataSet.length !== data.length && (<button_1.Button className="rounded-full" onClick={() => setDataSet(data)}>
            <react_icons_1.ReloadIcon />
          </button_1.Button>)}
      </div>
      <recharts_1.ResponsiveContainer width="100%" height={height} className={`flex flex-col gap-2 ${disabledClassName}`}>
        {children}
      </recharts_1.ResponsiveContainer>
      {enableAssistantMode && (<div className="relative flex items-center gap-2">
          <assistant_modal_1.AssistantModal className="relative my-[2%]"/>
        </div>)}
    </div>);
};
exports.ChartContainer = ChartContainer;
