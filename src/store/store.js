import { BehaviorSubject } from "rxjs";

export const randomTemperature = new BehaviorSubject();
export const randomAir = new BehaviorSubject();
export const randomHumidity = new BehaviorSubject();

setInterval(() => randomTemperature.next(getRandomTemperature()), getRandomDelay());
setInterval(() => randomAir.next(getRandomAir()), getRandomDelay());
setInterval(() => randomHumidity.next(getRandomHumidity()), getRandomDelay());

function getRandomTemperature() {
  return (Math.random() * 36 + 24).toFixed(2);
}

function getRandomAir() {
  return (Math.random() * 100 + 50).toFixed(2);
}

function getRandomHumidity() {
  return (Math.random() * 100 + 50).toFixed(2);
}

function getRandomDelay() {
  return Math.random() * 200 + 100;
}
