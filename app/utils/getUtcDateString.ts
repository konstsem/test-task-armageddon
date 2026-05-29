const DAY_MS = 24 * 60 * 60 * 1000;
const getUTCDateString = (date: Date) => date.toISOString().slice(0, 10);

export { DAY_MS, getUTCDateString };
