import React, { useEffect, useState, useRef } from "react";
import { event } from "./store";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [temperature, setTemperature] = useState("");
  const timeTemperature = useRef(new Date());
  const [air, setAir] = useState("");
  const timeAir = useRef(new Date());
  const [humidity, setHumidity] = useState("");
  const timeHumidity = useRef(new Date());
  const getTemperature = data => {
    const tempData = data.getValue();
    if ((tempData && !tempData.data) || !tempData) {
      return;
    }
    if (tempData.time.getTime() - timeTemperature.current.getTime() > 1000) {
      setTemperature("N/A");
    } else {
      setTemperature(tempData.data);
    }
    timeTemperature.current = tempData.time;
  };

  const getAir = data => {
    const airData = data.getValue();
    if ((airData && !airData.data) || !airData) {
      return;
    }
    if (airData.time.getTime() - timeAir.current.getTime() > 1000) {
      setAir("N/A");
    } else {
      setAir(airData.data);
    }
    timeAir.current = airData.time;
  };
  const getHumidity = data => {
    const humidityData = data.getValue();
    if ((humidityData && !humidityData.data) || !humidityData) {
      return;
    }
    if (humidityData.time.getTime() - timeHumidity.current.getTime() > 1000) {
      setHumidity("N/A");
    } else {
      setHumidity(humidityData.data);
    }
    timeHumidity.current = humidityData.time;
  };
  useEffect(() => {
    event.on("temperature", getTemperature);
    event.on("air", getAir);
    event.on("humidity", getHumidity);
    return () => {
      event.removeEventListener("temperature", getTemperature);
      event.on("air", getAir);
      event.on("humidity", getHumidity);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="text-center m-3 font-bold text-xl">My scoreboard</div>
      <div className="flex justify-around bg-gray-200">
        <Scoreboard type="Temperature" value={temperature} />
        <Scoreboard type="Air" value={air} />
        <Scoreboard type="Humidity" value={humidity} />
      </div>
    </React.Fragment>
  );
}

export default App;
