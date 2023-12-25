const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (isNaN(sampleActivity)) return false;
  if (sampleActivity > MODERN_ACTIVITY || sampleActivity < 1) return false;
  const age = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(age);
}

module.exports = {
  dateSample
};