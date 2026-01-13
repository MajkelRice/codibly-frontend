import { FuelType } from "../../types/FuelType";
import { CHART_COLORS } from "../../constants/ChartColors";

interface LegendItem {
  name: FuelType;
  value: number;
}

interface ChartLegendProps {
  items: LegendItem[];
}

export const ChartLegend = ({ items }: ChartLegendProps) => {
  return (
    <div className="mt-4 px-4 pb-4">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: CHART_COLORS[item.name] }}
              />
              <span className="text-text-muted capitalize truncate max-w-20">
                {item.name}
              </span>
            </div>
            <span className="font-semibold text-text-main">
              {item.value.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
