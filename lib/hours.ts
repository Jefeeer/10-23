import type { DayHours } from "../content/site";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  const suffix = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}

/** Day of week (0 = Sun) and minutes after midnight in Asia/Manila. */
export function manilaNow(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  return { day: DAYS.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function openStatus(date: Date, hours: DayHours[]) {
  const { day, minutes } = manilaNow(date);
  const today = hours[day];
  if (minutes >= today.open && minutes < today.close) {
    return { open: true, label: `Open now · until ${formatTime(today.close)}` };
  }
  if (minutes < today.open) {
    return { open: false, label: `Closed · opens at ${formatTime(today.open)}` };
  }
  return { open: false, label: `Closed · opens tomorrow ${formatTime(hours[(day + 1) % 7].open)}` };
}
