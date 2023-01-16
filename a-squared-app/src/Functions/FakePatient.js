export function HeartRate() {
  let HR = Math.random() * (90 - 80) + 80;
  return Math.floor(HR);
}

export function BloodPressure() {
  let top = Math.random() * (140 - 120) + 120;
  let bottom = Math.random() * (90 - 80) + 80;
  return Math.floor(top) + "/" + Math.floor(bottom);
}

export function Respiration() {}
