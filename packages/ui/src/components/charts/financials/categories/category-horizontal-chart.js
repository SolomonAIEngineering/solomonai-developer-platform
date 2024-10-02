"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryChart = void 0;
const recharts_1 = require("recharts");
const card_1 = require("../../../card");
const chart_1 = require("../../../chart");
const chartConfig = {
    desktop: {
        label: "Category",
        color: "hsl(var(--chart-1))",
    },
};
const CategoryChart = ({ data, title, description }) => {
    return (<card_1.Card className="border-none">
      <card_1.CardHeader>
        <card_1.CardTitle>{title}</card_1.CardTitle>
        <card_1.CardDescription>{description}</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent>
        <chart_1.ChartContainer config={chartConfig}>
          <recharts_1.BarChart accessibilityLayer data={data} layout="vertical" margin={{
            left: -20,
        }}>
            <recharts_1.XAxis type="number" dataKey="value" hide/>
            <recharts_1.YAxis dataKey="category" type="category" tickLine={false} tickMargin={2} axisLine={false} tickFormatter={(value) => value.slice(0, 5)}/>
            <chart_1.ChartTooltip cursor={false} content={<chart_1.ChartTooltipContent hideLabel/>}/>
            <recharts_1.Bar dataKey="value" fill="var(--color-desktop)" radius={5}/>
          </recharts_1.BarChart>
        </chart_1.ChartContainer>
      </card_1.CardContent>
      <card_1.CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing totals for the few months
        </div>
      </card_1.CardFooter>
    </card_1.Card>);
};
exports.CategoryChart = CategoryChart;
