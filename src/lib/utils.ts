import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDuration = (start: Date, end: Date) => {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60));
};

export const formatDateISO = (date: Date = new Date()): string => {
  return date.toISOString().slice(0, 10);
};

export const valueFormatter = Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});
