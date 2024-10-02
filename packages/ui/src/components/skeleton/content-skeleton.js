"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentPlaceholder = exports.RandomStatisticCard = void 0;
const react_1 = __importDefault(require("react"));
const card_1 = require("../card");
const area_chart_1 = require("../charts/base/area-chart");
const bar_chart_1 = require("../charts/base/bar-chart");
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Renders a random statistic card component.
 *
 * @return {ReactElement} The rendered random statistic card component.
 */
const RandomStatisticCard = () => {
    return (<div className="flex w-full max-w-sm flex-col items-center justify-center">
      <card_1.CardHeader></card_1.CardHeader>
      <card_1.CardContent className="flex items-center gap-4 p-5">
        <div className="grid gap-1">
          <div className="text-5xl font-bold tracking-tight">
            {getRandomNumber(1, 100)}%
          </div>
        </div>
      </card_1.CardContent>
    </div>);
};
exports.RandomStatisticCard = RandomStatisticCard;
/**
 * Renders a content placeholder component based on the specified chart type and enables stats if specified.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.enableStats - Whether to enable stats or not. Defaults to false.
 * @param {string} props.chartType - The type of chart to render. Can be 'bar', 'line', or 'stats'. Defaults to 'line'.
 * @return {JSX.Element} The rendered content placeholder component.
 */
const ContentPlaceholder = ({ enableStats, chartType = "line" }) => {
    let component = null;
    switch (chartType) {
        case "bar":
            component = <bar_chart_1.BarChart currency={""} data={[]} disabled={true}/>;
            break;
        case "line":
            component = <area_chart_1.AreaChart currency={""} data={[]} disabled={true}/>;
            break;
        case "stats":
            component = <exports.RandomStatisticCard />;
            break;
        default:
            component = <area_chart_1.AreaChart currency={""} data={[]} disabled={true}/>;
            break;
    }
    return (<div className="dark:bg-dark-tremor-background-subtle relative h-full overflow-hidden rounded bg-gray-50">
      <svg className="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700" fill="none">
        <defs>
          <pattern id="pattern-1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#pattern-1)" width="100%" height="100%"></rect>
      </svg>
      {enableStats && component}
    </div>);
};
exports.ContentPlaceholder = ContentPlaceholder;
