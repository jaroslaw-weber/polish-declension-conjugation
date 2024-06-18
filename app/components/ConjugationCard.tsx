import { genderEmoji } from "../model/gender";
import { Conjugation } from "../types/conjugation";

export function ConjugationCard({ entry }: { entry: Conjugation }) {

  // Mapping gender names to emojis
  return (
    <div className="card card-bordered w-96 bg-base-100 shadow-xl m-4">
      <div className="card-body">
        <div className="flex flex-col w-full items-center text-center py-4 mb-4 bg-gray-100 rounded-lg shadow gap-4">
        <div className="flex flex-row items-center text-right gap-4 w-full px-6 text-xs">
            <p className=" font-bold uppercase">{entry.type}</p>
            {entry.gender && (
              <span
                className="tooltip tooltip-right"
                data-tip={entry.gender}
              >
                <span className="text-2xl" >
                  {genderEmoji[entry.gender]}
                </span>
              </span>
            )}
          </div>
          <p className="text-6xl">{entry.emoji}</p>

          <p className="text-3xl font-medium">{entry.word}</p>
        </div>
        {entry.data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col gap-2">
              <div className="badge badge-primary">{item.case}</div>
              <p className="mb-1">
                {item.form} / {item.plural}
              </p>
              <p className="text-gray-600">{item.use}</p>
              <p className="italic text-gray-500">{item.example}</p>
              <div className="flex justify-center card-actions">
                <span className="text-3xl">{item.emoji}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
