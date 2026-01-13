import { ChargingForm } from "./components/energy/ChargingForm";
import { EnergyMixSection } from "./components/energy/EnergyMixSection";
import { Footer } from "./components/ui/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-success/30">
      <div className="grow py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <header className="text-center space-y-4 ">
            <h1 className="pb-4 text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-success to-primary">
              Energy Dashboard
            </h1>
            <p className="text-text-muted text-lg">
              Real-time UK Grid Intensity Monitor
            </p>
          </header>

          <EnergyMixSection />

          <ChargingForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
