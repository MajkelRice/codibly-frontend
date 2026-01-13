import type { FuelType } from "./FuelType";

export interface DailyMix {
  date: string;
  cleanEnergyPercentage: number;
  fuelMix: Record<FuelType, number>;
}
