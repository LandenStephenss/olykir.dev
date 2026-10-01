import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WORDS_PER_MINUTE = 200;

export function getReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return minutes;
}
