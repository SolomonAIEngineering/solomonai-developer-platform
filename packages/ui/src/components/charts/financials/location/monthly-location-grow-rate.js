"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyLocationGrowthRateChart = void 0;
const react_1 = require("react");
const react_select_1 = require("@radix-ui/react-select");
const hi2_1 = require("react-icons/hi2");
const location_sub_profile_converter_1 = require("../../../../lib/converters/location-sub-profile-converter");
const area_chart_1 = require("../../base/area-chart");
const MonthlyLocationGrowthRateChart = ({ currency, records, height, locale, enableAssistantMode, locations, selectedSpendingPeriod, }) => {
    const [selectedLocation, setSelectedLocation] = (0, react_1.useState)(locations[0] || "");
    const allChartData = (0, react_1.useMemo)(() => {
        return location_sub_profile_converter_1.LocationFinancialMetricsConverter.calculateMonthlyGrowthRate(records, selectedSpendingPeriod);
    }, [records, selectedSpendingPeriod]);
    const chartData = (0, react_1.useMemo)(() => {
        const data = allChartData[selectedLocation] || [];
        // convert to scatter data points
        return data.map(({ month, growthRate }) => ({ date: month, value: growthRate }));
    }, [allChartData, selectedLocation]);
    (0, react_1.useEffect)(() => {
        console.log("Component re-rendered. Selected location:", selectedLocation);
        console.log("Chart data:", chartData);
    }, [selectedLocation, chartData]);
    return (<div>
      <div className="flex flex-1 justify-between">
        <p className="flex flex-1 gap-2 p-[3%] text-lg font-bold md:text-2xl">
          <hi2_1.HiSquare3Stack3D className="inline-block h-6 w-6 align-middle"/>
          {selectedLocation}
        </p>
        <react_select_1.Select onValueChange={setSelectedLocation} value={selectedLocation}>
          <react_select_1.SelectTrigger className="my-[2%] w-fit">
            <react_select_1.SelectValue placeholder="Select a location"/>
          </react_select_1.SelectTrigger>
          <react_select_1.SelectContent>
            {locations.map((location) => (<react_select_1.SelectItem key={location} value={location}>
                {location}
              </react_select_1.SelectItem>))}
          </react_select_1.SelectContent>
        </react_select_1.Select>
      </div>

      <div className="py-[2%]">
        <area_chart_1.AreaChart currency={currency} data={chartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode}/>
      </div>
    </div>);
};
exports.MonthlyLocationGrowthRateChart = MonthlyLocationGrowthRateChart;
