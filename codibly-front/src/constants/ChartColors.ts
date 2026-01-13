import { FuelType } from "../types/FuelType";

export const CHART_COLORS: Record<FuelType, string> = {
  [FuelType.BIOMASS]: "#10b981", // emerald-500
  [FuelType.NUCLEAR]: "#3b82f6", // blue-500
  [FuelType.HYDRO]: "#06b6d4", // cyan-500
  [FuelType.WIND]: "#8b5cf6", // violet-500
  [FuelType.SOLAR]: "#f59e0b", // amber-500

  [FuelType.GAS]: "#64748b", // slate-500
  [FuelType.COAL]: "#000000", // black
  [FuelType.IMPORTS]: "#9ca3af", // gray-400
  [FuelType.OTHER]: "#d1d5db", // gray-300
};
