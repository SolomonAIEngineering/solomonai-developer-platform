"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownwardTrend = exports.UpwardTrend = exports.Default = void 0;
const analytics_chart_1 = require("./analytics-chart");
exports.default = {
    component: analytics_chart_1.AnalyticsChart,
    parameters: {
        layout: "centered",
    },
    decorators: [(Story) => <Story />],
};
const Template = (args) => (<div className="w-[900px]">
    <analytics_chart_1.AnalyticsChart {...args}/>
  </div>);
// Helper function to generate sample stock data
const generateSampleData = (days) => {
    const data = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        const basePrice = 100 + Math.random() * 50;
        data.push({
            date: date.toISOString().split("T")[0] || "",
            expense: basePrice,
            revenue: basePrice + Math.random() * 5,
            profit: basePrice - Math.random() * 5,
        });
    }
    return data;
};
exports.Default = Template.bind({});
exports.Default.args = {
    chartData: generateSampleData(90),
    title: "Stock Price Chart",
    description: "Interactive stock price chart for the last 3 months",
};
exports.UpwardTrend = Template.bind({});
exports.UpwardTrend.args = {
    chartData: generateSampleData(90).map((item, index) => ({
        ...item,
        revenue: item.revenue * (1 + index * 0.01),
    })),
    title: "Upward Trending Stock",
    description: "Stock with a clear upward trend",
};
exports.DownwardTrend = Template.bind({});
exports.DownwardTrend.args = {
    chartData: generateSampleData(90).map((item, index) => ({
        ...item,
        revenue: item.revenue * (1 - index * 0.01),
    })),
    title: "Downward Trending Stock",
    description: "Stock with a clear downward trend",
};
