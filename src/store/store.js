import { BehaviorSubject } from "rxjs";
import AppEvent from "../utils";
import { constants } from "../utils/constants"

export const randomTemperature = new BehaviorSubject();
export const randomAir = new BehaviorSubject();
export const randomHumidity = new BehaviorSubject();

export const event = new AppEvent();

setInterval(
  () => randomTemperature.next(getRandomTemperature()),
  getRandomDelay()
);
setInterval(() => randomAir.next(getRandomAir()), getRandomDelay());
setInterval(() => randomHumidity.next(getRandomHumidity()), getRandomDelay());

setInterval(
  () => event.emit(constants.temperature, randomTemperature),
  getRandomDelayEmit()
);

setInterval(() => event.emit(constants.air, randomAir), getRandomDelayEmit());

setInterval(() => event.emit(constants.humidity, randomHumidity), getRandomDelayEmit());

function getRandomTemperature() {
  if (Math.random() > 0.3) {
    return { data: (Math.random() * 36 + 24).toFixed(2), time: new Date() };
  }
  return { data: undefined, time: new Date() };
}

function getRandomAir() {
  if (Math.random() > 0.3) {
    return { data: (Math.random() * 100 + 50).toFixed(2), time: new Date() };
  }
  return { data: undefined, time: new Date() };
}

function getRandomHumidity() {
  if (Math.random() > 0.3) {
    return { data: (Math.random() * 100 + 50).toFixed(2), time: new Date() };
  }
  return { data: undefined, time: new Date() };
}

function getRandomDelay() {
  return Math.random() * 200 + 100;
}

function getRandomDelayEmit() {
  return Math.random() * 1100 + 100;
}
