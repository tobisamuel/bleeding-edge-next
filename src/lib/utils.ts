import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYearFromDate(dateString: string) {
  const parts = dateString.split("-");
  if (parts.length === 3) {
    return parts[0];
  } else {
    return "Invalid Date";
  }
}
