import { english } from "./english";
import { korean } from "./korean";
import { polish } from "./polish";

const missingPrefix = "MISSING LOCALE ";

export function getLocale(key: string, language: string): string {
  const onMissing = missingPrefix + language + " " + key;
  if (language === "ko") {
    return korean[key] || onMissing;
  }
  if (language == "en") {
    return english[key] || onMissing;
  }
  if (language === "pl") {
    return polish[key] || onMissing;
  }
  return onMissing;
}
