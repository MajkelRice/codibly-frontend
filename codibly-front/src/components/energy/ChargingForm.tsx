import { useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import type { ChargingWindow } from "../../types/ChargingWindow";
import { getOptimalCharging } from "../../api/api";
import { ErrorMessage } from "../ui/ErrorMessage";

export const ChargingForm = () => {
  const [hours, setHours] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ChargingWindow | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await getOptimalCharging(hours);
      setResult(data);
    } catch (e) {
      console.error(e);
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString("en-US", {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card title="Smart EV Optimizer" className="max-w-2xl mx-auto mt-12">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="text-text-muted text-sm font-medium">
              Duration
            </label>
            <span className="text-4xl font-bold text-primary">{hours}h</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            value={hours}
            onChange={(e) => setHours(+e.target.value)}
            className="w-full h-2 bg-bg-app rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <ErrorMessage message={error || ""} />

        <Button onClick={handleCalculate} isLoading={loading}>
          Find Optimal Window
        </Button>

        {result && (
          <div className="bg-bg-app/50 p-6 rounded-lg border border-success/30 animate-in fade-in slide-in-from-bottom-2">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-text-muted uppercase">Start</p>
                <p className="font-bold">{formatDate(result.startTime)}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase">End</p>
                <p className="font-bold">{formatDate(result.endTime)}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase">
                  Clean Energy
                </p>
                <p className="font-bold text-success text-xl">
                  {result.cleanEnergyPercentage}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
