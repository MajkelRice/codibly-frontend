import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ChargingForm } from "./ChargingForm";
import * as api from "../../api/api";

vi.mock("../../api/api", () => ({
  getOptimalCharging: vi.fn(),
}));

describe("ChargingForm Component", () => {
  it("renders correctly", () => {
    render(<ChargingForm />);
    expect(screen.getByText(/Smart EV Optimizer/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Find Optimal Window/i })
    ).toBeInTheDocument();
  });

  it("calls API and displays results when button is clicked", async () => {
    const mockResponse = {
      startTime: "2026-01-13T10:00:00",
      endTime: "2026-01-13T14:00:00",
      cleanEnergyPercentage: 85.5,
    };

    vi.spyOn(api, "getOptimalCharging").mockResolvedValue(mockResponse);

    render(<ChargingForm />);

    const button = screen.getByRole("button", { name: /Find Optimal Window/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("85.5%")).toBeInTheDocument();
    });

    expect(api.getOptimalCharging).toHaveBeenCalledTimes(1);
  });
});
