import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EnergyChart } from "./EnergyChart";
import { FuelType } from "../../types/FuelType";
import type { DailyMix } from "../../types/DailyMix";

const mockData: DailyMix = {
  date: "2026-01-15",
  cleanEnergyPercentage: 42.5,
  fuelMix: {
    [FuelType.BIOMASS]: 10,
    [FuelType.NUCLEAR]: 20,
    [FuelType.WIND]: 12.5,
    [FuelType.SOLAR]: 0,
    [FuelType.HYDRO]: 0,
    [FuelType.GAS]: 50,
    [FuelType.COAL]: 0,
    [FuelType.IMPORTS]: 7.5,
    [FuelType.OTHER]: 0,
  },
};

describe("EnergyChart Component", () => {
  it("renders date and clean energy badge correctly", () => {
    render(<EnergyChart data={mockData} />);

    expect(screen.getByText("2026-01-15")).toBeInTheDocument();

    expect(screen.getByText("Clean: 42.5%")).toBeInTheDocument();
  });

  it("renders legend items correctly", () => {
    render(<EnergyChart data={mockData} />);

    expect(screen.getByText(/biomass/i)).toBeInTheDocument();
    expect(screen.getByText(/nuclear/i)).toBeInTheDocument();
    expect(screen.getByText(/gas/i)).toBeInTheDocument();
    expect(screen.getByText("50.0%")).toBeInTheDocument();
  });
});
