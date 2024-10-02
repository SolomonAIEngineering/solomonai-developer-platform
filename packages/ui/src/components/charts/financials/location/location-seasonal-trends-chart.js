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
exports.LocationSeasonalTrendsChart = void 0;
const react_1 = __importStar(require("react"));
const hi2_1 = require("react-icons/hi2");
const location_sub_profile_converter_1 = require("../../../../lib/converters/location-sub-profile-converter");
const select_1 = require("../../../select");
const scatter_chart_1 = require("../../base/scatter-chart");
const LocationSeasonalTrendsChart = ({ locations, xUNit, yUnit, currency, records, height, locale, enableAssistantMode, selectedSpendingPeriod, }) => {
    const [selectedCity, setSelectedCity] = (0, react_1.useState)(locations[0] || "");
    if (!records || records.length === 0) {
        return null;
    }
    const allChartData = (0, react_1.useMemo)(() => {
        return (location_sub_profile_converter_1.LocationFinancialMetricsConverter.identifySeasonalTrends(records, selectedSpendingPeriod) || []);
    }, [records, selectedSpendingPeriod]);
    const chartData = (0, react_1.useMemo)(() => {
        const data = allChartData[selectedCity] || [];
        // convert to scatter data points
        return Object.entries(data).map(([season, value]) => ({ x: season, y: value }));
    }, [allChartData, selectedCity]);
    return (<div>
      <div className="flex flex-1 justify-between">
        <p className="flex flex-1 gap-2 p-[3%] text-lg font-bold md:text-2xl">
          <hi2_1.HiSquare3Stack3D className="inline-block h-6 w-6 align-middle"/>
          {selectedCity}
        </p>
        <select_1.Select onValueChange={setSelectedCity} value={selectedCity}>
          <select_1.SelectTrigger className="my-[2%] w-fit">
            <select_1.SelectValue placeholder="Select a Locationt"/>
          </select_1.SelectTrigger>
          <select_1.SelectContent>
            {locations.map((location) => (<select_1.SelectItem key={location} value={location}>
                {location}
              </select_1.SelectItem>))}
          </select_1.SelectContent>
        </select_1.Select>
      </div>
      <scatter_chart_1.ScatterChart currency={currency} data={chartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode} xUNit={xUNit} yUnit={yUnit}/>
    </div>);
};
exports.LocationSeasonalTrendsChart = LocationSeasonalTrendsChart;
