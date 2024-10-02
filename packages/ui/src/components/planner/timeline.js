"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
const react_1 = __importDefault(require("react"));
const planner_context_1 = require("../../contexts/planner-context");
const cn_1 = require("../../utils/cn");
const table_1 = require("../table");
const Timeline = ({ className, ...props }) => {
    const { timeLabels } = (0, planner_context_1.useCalendar)();
    return (<table_1.TableHeader>
      <table_1.TableRow className="bg-background">
        <table_1.TableHead></table_1.TableHead>
        {timeLabels.map((label, index) => (<table_1.TableHead key={index} className={(0, cn_1.cn)("sticky top-0 z-10 min-w-56 border-x bg-background text-center lg:min-w-72")}>
            {label}
          </table_1.TableHead>))}
      </table_1.TableRow>
    </table_1.TableHeader>);
};
exports.Timeline = Timeline;
