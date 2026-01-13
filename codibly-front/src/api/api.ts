import axios from "axios";
import type { DailyMix } from "../types/DailyMix";
import type { ChargingWindow } from "../types/ChargingWindow";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api/energy";
const api = axios.create({
  baseURL: API_URL,
});

export const getEnergyMix = async (): Promise<DailyMix[]> => {
  const response = await api.get<DailyMix[]>("/mix");
  return response.data;
};

export const getOptimalCharging = async (
  hours: number
): Promise<ChargingWindow> => {
  const response = await api.get<ChargingWindow>("/optimal-charging", {
    params: { hours },
  });
  return response.data;
};
