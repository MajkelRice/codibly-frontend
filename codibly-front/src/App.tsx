import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

function App() {
  const [status, setStatus] = useState<string>("Testing connection...");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/test`)
      .then((res) => setStatus(res.data))
      .catch((err) => setStatus("No connection:" + err));
  }, []);

  return (
    <div className="p-8 font-sans">
      <h1>Codibly Energy App</h1>
      <p>
        Status backendu: <strong>{status}</strong>
      </p>
      <hr />
    </div>
  );
}

export default App;
