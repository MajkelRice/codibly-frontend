import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import type { DailyMix } from "../../types/DailyMix";
import { FuelType } from "../../types/FuelType";
import { CHART_COLORS } from "../../constants/ChartColors";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ChartLegend } from "./ChartLegend";

export const EnergyChart = ({ data }: { data: DailyMix }) => {
  const chartData = Object.entries(data.fuelMix).map(([name, value]) => ({
    name: name as FuelType,
    value,
  }));

  return (
    <Card className="flex flex-col h-full hover:border-border-accent transition-colors duration-300">
      <div className="flex flex-col items-center justify-center pt-2 mb-2">
        <h4 className="text-xl font-bold text-text-main mb-2">{data.date}</h4>
        <Badge variant="success">Clean: {data.cleanEnergyPercentage}%</Badge>
      </div>

      {/* charts */}
      <div className="h-56 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((e, i) => (
                <Cell key={i} fill={CHART_COLORS[e.name]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                color: "#fff",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#fff" }}
              formatter={(value, name) => [
                `${(value as number).toFixed(1)}%`,
                name as string,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-2xl font-black text-text-muted/20 select-none">
            UK
          </span>
        </div>
      </div>

      <ChartLegend items={chartData} />
    </Card>
  );
};
