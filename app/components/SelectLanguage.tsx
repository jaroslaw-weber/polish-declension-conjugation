import { useAtom } from "jotai";
import { languageAtom } from "../state/config";

export default function SelectLanguage({}) {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <select
      className="select select-bordered w-full"
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
    >
      <option disabled selected>
        Language
      </option>
      <option value="ko">Korean</option>
      <option value="en">English</option>
    </select>
  );
}
