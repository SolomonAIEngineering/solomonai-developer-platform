"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMerchantGrowthRateChart = void 0;
const react_1 = require("react");
const react_select_1 = require("@radix-ui/react-select");
const hi2_1 = require("react-icons/hi2");
const merchant_sub_profile_converter_1 = require("../../../../lib/converters/merchant-sub-profile-converter");
const area_chart_1 = require("../../base/area-chart");
const MonthlyMerchantGrowthRateChart = ({ currency, records, height, locale, enableAssistantMode, merchants, selectedSpendingPeriod, }) => {
    const [selectedMerchant, setSelectedMerchant] = (0, react_1.useState)(merchants[0] || "");
    const allChartData = (0, react_1.useMemo)(() => {
        return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.calculateMonthlyGrowthRate(records, selectedSpendingPeriod);
    }, [records, selectedSpendingPeriod]);
    const chartData = (0, react_1.useMemo)(() => {
        const data = allChartData[selectedMerchant] || [];
        // convert to scatter data points
        return data.map(({ month, growthRate }) => ({ date: month, value: growthRate }));
    }, [allChartData, selectedMerchant]);
    (0, react_1.useEffect)(() => {
        console.log("Component re-rendered. Selected merchant:", selectedMerchant);
        console.log("Chart data:", chartData);
    }, [selectedMerchant, chartData]);
    return (<div>
      <div className="flex flex-1 justify-between">
        <p className="flex flex-1 gap-2 p-[3%] text-lg font-bold md:text-2xl">
          <hi2_1.HiSquare3Stack3D className="inline-block h-6 w-6 align-middle"/>
          {selectedMerchant}
        </p>
        <react_select_1.Select onValueChange={setSelectedMerchant} value={selectedMerchant}>
          <react_select_1.SelectTrigger className="my-[2%] w-fit">
            <react_select_1.SelectValue placeholder="Select a merchant"/>
          </react_select_1.SelectTrigger>
          <react_select_1.SelectContent>
            {merchants.map((merchant) => (<react_select_1.SelectItem key={merchant} value={merchant}>
                {merchant}
              </react_select_1.SelectItem>))}
          </react_select_1.SelectContent>
        </react_select_1.Select>
      </div>

      <div className="py-[2%]">
        <area_chart_1.AreaChart currency={currency} data={chartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode}/>
      </div>
    </div>);
};
exports.MonthlyMerchantGrowthRateChart = MonthlyMerchantGrowthRateChart;
