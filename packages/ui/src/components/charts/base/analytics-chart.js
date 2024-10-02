"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsChart = void 0;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const recharts_1 = require("recharts");
const card_1 = require("../../card");
const chart_1 = require("../../chart");
const chartConfig = {
    financialData: {
        label: "Financial Data",
    },
    revenue: {
        label: "Revenue",
        color: "hsl(var(--chart-3))",
    },
    profit: {
        label: "Profit",
        color: "hsl(var(--chart-2))",
    },
    expense: {
        label: "Expense",
        color: "hsl(var(--chart-1))",
    },
};
const AnalyticsChart = ({ chartData, title, description, footerDescription, }) => {
    const formattedData = (0, react_1.useMemo)(() => chartData
        .map((item) => ({
        ...item,
        dateTime: new Date(item.date).getTime(),
    }))
        .filter((item) => !isNaN(item.dateTime))
        .sort((a, b) => a.dateTime - b.dateTime), [chartData]);
    const minValue = (0, react_1.useMemo)(() => Math.min(...formattedData.map((item) => Math.min(item.expense, item.revenue, item.profit))), [formattedData]);
    const maxValue = (0, react_1.useMemo)(() => Math.max(...formattedData.map((item) => Math.max(item.expense, item.revenue, item.profit))), [formattedData]);
    const percentageChange = (0, react_1.useMemo)(() => {
        if (formattedData.length === 0)
            return 0;
        const currentDate = new Date().getTime();
        const thirtyDaysAgo = currentDate - 30 * 24 * 60 * 60 * 1000;
        const recentData = formattedData.filter((item) => item.dateTime >= thirtyDaysAgo);
        if (recentData.length === 0)
            return 0;
        const firstValue = recentData[0]?.revenue ?? 0;
        const lastValue = recentData[recentData.length - 1]?.revenue ?? 0;
        console.log(recentData[0], recentData[recentData.length - 1]);
        return ((lastValue - firstValue) / firstValue) * 100;
    }, [formattedData]);
    const isTrendingUp = percentageChange > 0;
    return (<card_1.Card className="w-full">
      <card_1.CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <card_1.CardTitle>{title}</card_1.CardTitle>
          <card_1.CardDescription>{description}</card_1.CardDescription>
        </div>
      </card_1.CardHeader>
      <card_1.CardContent className="px-2 sm:p-6">
        <div className="aspect-auto h-[400px] w-full">
          <chart_1.ChartContainer config={chartConfig} className="aspect-auto h-[400px] w-full">
            <recharts_1.ResponsiveContainer width="100%" height="100%">
              <recharts_1.LineChart data={formattedData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
        }}>
                <recharts_1.CartesianGrid strokeDasharray="3 3"/>
                <recharts_1.XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} minTickGap={32} tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            });
        }}/>
                <recharts_1.YAxis domain={[minValue * 0.9, maxValue * 1.1]} tickFormatter={(value) => `$${value.toFixed(2)}`}/>
                <chart_1.ChartTooltip content={<chart_1.ChartTooltipContent className="w-[150px]" labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                });
            }}/>}/>
                <recharts_1.Line type="monotone" dataKey="revenue" stroke={chartConfig.revenue.color} strokeWidth={2} dot={false}/>
                <recharts_1.Line type="monotone" dataKey="profit" stroke={chartConfig.profit.color} strokeWidth={2} dot={false}/>
                <recharts_1.Line type="monotone" dataKey="expense" stroke={chartConfig.expense.color} strokeWidth={2} dot={false}/>
              </recharts_1.LineChart>
            </recharts_1.ResponsiveContainer>
          </chart_1.ChartContainer>
        </div>
      </card_1.CardContent>
      <card_1.CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="font-medium leading-none">
          {isTrendingUp ? (<>
              Trending up by{" "}
              <span className="text-[#2DB78A]">
                {percentageChange.toFixed(2)}%{" "}
              </span>{" "}
              this month{" "}
              <lucide_react_1.TrendingUp className="inline text-[#2DB78A] h-4 w-4"/>
            </>) : (<>
              Trending down by{" "}
              <span className="text-[#E2366F]">
                {percentageChange.toFixed(2)}%{" "}
              </span>{" "}
              this month{" "}
              <lucide_react_1.TrendingDown className="inline text-[#E2366F] h-4 w-4"/>
            </>)}
        </div>
        {footerDescription && (<div className="leading-none text-muted-foreground">
            {footerDescription}
          </div>)}
      </card_1.CardFooter>
    </card_1.Card>);
};
exports.AnalyticsChart = AnalyticsChart;
