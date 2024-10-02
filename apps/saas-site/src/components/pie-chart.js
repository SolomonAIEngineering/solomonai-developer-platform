"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const recharts_1 = require("recharts");
const card_1 = require("@/components/ui/card");
const chart_1 = require("@/components/ui/chart");
const chartData = [
    { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 110, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 165, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
];
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
};
function Component() {
    return (<card_1.Card className="flex flex-col border-none shadow-none">
      <card_1.CardContent className="flex-1 pb-0">
        <chart_1.ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <recharts_1.PieChart>
            <chart_1.ChartTooltip cursor={false} content={<chart_1.ChartTooltipContent hideLabel/>}/>
            <recharts_1.Pie data={chartData} dataKey="visitors" nameKey="browser"/>
          </recharts_1.PieChart>
        </chart_1.ChartContainer>
      </card_1.CardContent>
      <card_1.CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-2 text-muted-foreground text-center">
          Effective marketing and advertising materials. It is also a great
          tool.
        </div>
      </card_1.CardFooter>
    </card_1.Card>);
}
