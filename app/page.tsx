"use client";
import Image from "next/image";

import { ConjugationCard } from "./components/ConjugationCard";
import { nouns } from "./model/conjugation";
import SelectLanguage from "./components/SelectLanguage";
import _ from "lodash";

export default function Home() {
  const randomWord = _.sample(nouns)!;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Polish Conjugation
        </h1>
        <div className=" py-6 ">
          <SelectLanguage />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <ConjugationCard word={randomWord} />
        </div>
      </div>
    </div>
  );
}
