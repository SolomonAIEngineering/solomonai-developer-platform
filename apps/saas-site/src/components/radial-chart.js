"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const card_1 = require("@/components/ui/card");
const chart_1 = require("@/components/ui/chart");
const recharts_1 = require("recharts");
const chartData = [
    { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
];
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-1))",
    },
};
function Component() {
    return (<card_1.Card className="border-none shadow-none">
      <card_1.CardContent className="flex items-center">
        <div>
          <chart_1.ChartContainer config={chartConfig} className="mx-auto aspect-square w-[100px] h-[110px]">
            <recharts_1.RadialBarChart data={chartData} startAngle={-190} endAngle={70} innerRadius={34} outerRadius={50}>
              <recharts_1.PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-muted last:fill-background" polarRadius={[37, 30]}/>
              <recharts_1.RadialBar dataKey="visitors" background cornerRadius={20}/>
              <recharts_1.PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <recharts_1.Label content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (<text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle"></text>);
            }
        }}/>
              </recharts_1.PolarRadiusAxis>
            </recharts_1.RadialBarChart>
          </chart_1.ChartContainer>
        </div>
        <div className="ml-5">
          <h2 className="font-semibold text-xl">Title</h2>
          <p>Effective marketing and advertising materials.</p>
        </div>
      </card_1.CardContent>
    </card_1.Card>);
}
