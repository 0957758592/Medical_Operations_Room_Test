import React from "react";
import { useStore } from "./hooks";
import { randomTemperature, randomAir, randomHumidity } from "./store";
import Scoreboard from "./components/Scoreboard";

function App() {
  const temperature = useStore(randomTemperature);
  const air = useStore(randomAir);
  const humidity = useStore(randomHumidity);
  return (
    <div className="flex justify-around bg-gray-200">
      <Scoreboard type="Temperature" value={temperature} />
      <Scoreboard type="Air" value={air} />
      <Scoreboard type="Humidity" value={humidity} />
    </div>
  );
}

export default App;
