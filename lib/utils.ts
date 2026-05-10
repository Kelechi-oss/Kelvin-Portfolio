import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(start?: string, end?: string, current?: boolean) {
  if (!start) return "";
  if (current) return `${start} – Present`;
  if (!end) return start;
  return `${start} – ${end}`;
}
