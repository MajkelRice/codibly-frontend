import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { EnergyMixSection } from "./EnergyMixSection";
import * as api from "../../api/api";
import { FuelType } from "../../types/FuelType";

vi.mock("../../api/api", () => ({
  getEnergyMix: vi.fn(),
}));

const mockMixData = [
  {
    date: "2026-01-01",
    cleanEnergyPercentage: 50,
    fuelMix: { [FuelType.WIND]: 50, [FuelType.GAS]: 50 },
  },
  {
    date: "2026-01-02",
    cleanEnergyPercentage: 60,
    fuelMix: { [FuelType.WIND]: 60, [FuelType.GAS]: 40 },
  },
];

describe("EnergyMixSection Component", () => {
  it("shows charts when API call is successful", async () => {
    vi.spyOn(api, "getEnergyMix").mockResolvedValue(mockMixData as any);

    render(<EnergyMixSection />);

    await waitFor(() => {
      expect(screen.getByText("2026-01-01")).toBeInTheDocument();
      expect(screen.getByText("2026-01-02")).toBeInTheDocument();
    });
  });

  it("shows error message when API call fails", async () => {
    vi.spyOn(api, "getEnergyMix").mockRejectedValue(new Error("Server error"));

    render(<EnergyMixSection />);

    await waitFor(() => {
      expect(
        screen.getByText(/Unable to connect to the server/i)
      ).toBeInTheDocument();
    });
  });
});
