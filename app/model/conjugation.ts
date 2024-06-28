import { uniq } from "lodash";
import { english } from "../locale/english";

export const nounCases = [
  "nominative",
  "genitive",
  "dative",
  "accusative",
  "instrumental",
  "locative",
  "vocative",
];

export const nouns = uniq(
  Object.keys(english)
    .filter((x) => x.startsWith("word:"))
    .map((x) => x.split(":")[1])
);
