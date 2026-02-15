const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatLongDate(isoDate: string) {
  // isoDate: YYYY-MM-DD
  const [yearRaw, monthRaw, dayRaw] = isoDate.split("-");
  const year = Number(yearRaw);
  const monthIndex = Number(monthRaw) - 1;
  const day = Number(dayRaw);
  const monthName = MONTHS[monthIndex];
  if (!monthName || !Number.isFinite(year) || !Number.isFinite(day)) return isoDate;
  return `${monthName} ${day}, ${year}`;
}

export function compareIsoDateDesc(a: string, b: string) {
  // ISO date strings sort lexicographically in chronological order.
  if (a === b) return 0;
  return a > b ? -1 : 1;
}

