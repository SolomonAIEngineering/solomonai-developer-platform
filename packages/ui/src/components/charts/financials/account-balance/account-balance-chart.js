"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalanceChart = void 0;
const account_balancer_converter_1 = require("../../../../lib/converters/account-balancer-converter");
const card_1 = require("../../../card");
const area_chart_1 = require("../../base/area-chart");
const AccountBalanceChart = ({ currency, data, height = 290, locale, enableAssistantMode, }) => {
    const chartData = account_balancer_converter_1.AccountBalanceConverter.convertToChartDataPoints(data);
    return (<div className="h-full w-full">
      <card_1.CardHeader>
        <card_1.CardTitle className="font bold text-lg">
          Account Balance Over Time
        </card_1.CardTitle>
        <card_1.CardDescription>
          Account balance over time in {currency}
        </card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent className="p-3">
        <div className="border-none text-background shadow-none">
          <area_chart_1.AreaChart currency={currency} data={chartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode}/>
        </div>
      </card_1.CardContent>
    </div>);
};
exports.AccountBalanceChart = AccountBalanceChart;
