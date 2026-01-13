import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { EnergyChart } from "./EnergyChart";
import type { DailyMix } from "../../types/DailyMix";
import { getEnergyMix } from "../../api/api";
import { ErrorMessage } from "../ui/ErrorMessage";

export const EnergyMixSection = () => {
  const [mixData, setMixData] = useState<DailyMix[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getEnergyMix()
      .then((data) => {
        setMixData(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to connect to the server. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-75">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-700">
      {mixData.map((day) => (
        <EnergyChart key={day.date} data={day} />
      ))}
    </section>
  );
};
