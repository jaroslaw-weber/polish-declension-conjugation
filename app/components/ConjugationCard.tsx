"use client";
import { emoji } from "../model/emoji";
import { languageAtom } from "../state/config";
import { useAtom } from "jotai";
import { getLocale } from "../locale/locale";
import _ from "lodash";
import { caseNumber } from "../model/const";
import { nounCases } from "../model/conjugation";

export function ConjugationCard({ word }: { word: string }) {
  const [language] = useAtom(languageAtom);

  function getLocaleWithPrefix(suffix: string, lang: string = language) {
    const prefix = `word:${word}:${suffix}`;
    return getLocale(prefix, lang);
  }

  const gender = getLocaleWithPrefix("gender", "en");
  const genderLocale = getLocale(gender, language);
  const genderEmoji = emoji[gender] || "";
  const type = getLocaleWithPrefix("type", "en");
  const typeLocale = getLocale(type, language);

  return (
    <>
      <div className="card card-bordered shadow-xl">
        <div className="card-body">
          <div className="flex flex-col w-full h-full items-center justify-center text-center gap-6">
            <div className="flex flex-row items-center text-right gap-4 w-full px-6 text-xs">
              <p className="font-bold uppercase">{typeLocale}</p>
              {gender && (
                <span className="tooltip tooltip-right" data-tip={genderLocale}>
                  <span className="text-2xl">{genderEmoji}</span>
                </span>
              )}
            </div>
            <p className="text-6xl pt-6">
              {getLocaleWithPrefix("emoji", "en")}
            </p>
            <p className="text-3xl font-medium">
              {getLocaleWithPrefix("nominative", "pl")}
            </p>
            <p>({getLocale("word:" + word, language)})</p>
          </div>
        </div>
      </div>
      {nounCases.map((caseType) => (
        <div key={caseType}>
          <div className="card card-bordered shadow-xl h-full">
            <div className="flex flex-col gap-4 card-body h-full">
              <div className="badge badge-primary flex gap-3">
                <p>#{caseNumber[caseType]}</p>
                <p>{getLocale(caseType, language)}</p>
              </div>
              <div className="flex justify-center card-actions py-4">
                <span className="text-3xl">{emoji[caseType]}</span>
              </div>
              <p className="mb-1 font-bold">
                {getLocaleWithPrefix(caseType, "pl") /*todo: plural too*/}
              </p>
              <p className="text-gray-600">
                {getLocale(caseType + ":description", language)}
              </p>
              <p className="italic text-gray-500">
                {getLocaleWithPrefix(caseType + ":example", "pl")}
              </p>
              <p className="italic text-gray-500">
                {getLocaleWithPrefix(caseType + ":example", language)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
