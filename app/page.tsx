import Image from "next/image";  
import { ConjugationCard } from "./components/ConjugationCard";
import { conjugationData } from "./model/conjugation";

export default function Home() {
  return (
    <><div className="p-5">
    <h1 className="text-3xl font-bold mb-4 text-center">
      Polish Conjugation
    </h1>
    <div className="flex flex-wrap justify-center">
      {conjugationData.map((entry, index) => (
        <ConjugationCard key={index} entry={entry} />
      ))}
    </div>
  </div>
    </>
  );
}
