import React, { useEffect, useState, useRef } from "react";
import { event } from "./store";
import Scoreboard from "./components/Scoreboard";
import {constants} from "./utils/constants"

function App() {
  const [temperature, setTemperature] = useState("");
  const timeTemperature = useRef(new Date());
  const [air, setAir] = useState("");
  const timeAir = useRef(new Date());
  const [humidity, setHumidity] = useState("");
  const timeHumidity = useRef(new Date());
  
  const getTemperature = async data => {
    const tempData = await data.getValue();
    if ((tempData && !tempData.data) || !tempData) {
      return;
    }
    if (tempData.time.getTime() - timeTemperature.current.getTime() > 1000) {
      setTemperature(constants.notAvailable);
    } else {
      setTemperature(tempData.data);
    }
    timeTemperature.current = tempData.time;
  };

  const getAir = async data => {
    const airData = await data.getValue();
    if ((airData && !airData.data) || !airData) {
      return;
    }
    if (airData.time.getTime() - timeAir.current.getTime() > 1000) {
      setAir(constants.notAvailable);
    } else {
      setAir(airData.data);
    }
    timeAir.current = airData.time;
  };

  const getHumidity = async data => {
    const humidityData = await data.getValue();
    if ((humidityData && !humidityData.data) || !humidityData) {
      return;
    }
    if (humidityData.time.getTime() - timeHumidity.current.getTime() > 1000) {
      setHumidity(constants.notAvailable);
    } else {
      setHumidity(humidityData.data);
    }
    timeHumidity.current = humidityData.time;
  };

  useEffect(() => {
    event.on(constants.temperature, getTemperature);
    event.on(constants.air, getAir);
    event.on(constants.humidity, getHumidity);
    return () => {
      event.removeEventListener(constants.temperature.toLowerCase(), getTemperature);
      event.on(constants.air, getAir);
      event.on(constants.humidity, getHumidity);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="text-center m-3 font-bold text-xl">My scoreboard</div>
    <div className="flex justify-around bg-gray-200">
      <Scoreboard type={constants.temperature} value={temperature} />
      <Scoreboard type={constants.air} value={air} />
      <Scoreboard type={constants.humidity} value={humidity} />
      </div>
    </React.Fragment>
  );
}

export default App;
