<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Polish Conjugation</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@^3.0/dist/tailwind.min.css"
      rel="stylesheet"
    />

    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <script src="https://cdn.tailwindcss.com"></script>

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style>
      .p {
        font-family: "Roboto", sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel">
      const nounConjugation = {
        type: "noun",
        word: "kot",
        emoji: "🐱",
        gender: "masculine", // Adding the gender property here
        data: [
          {
            case: "Nominative",
            form: "kot",
            plural: "koty",
            use: "Used for the main subject of a sentence.",
            example: "Kot jest duży. (The cat is big.)",
            emoji: "🗣️",
          },
          {
            case: "Genitive",
            form: "kota",
            plural: "kotów",
            use: "Indicates ownership or something missing.",
            example: "Nie ma kota. (There is no in the house.)",
            emoji: "🗝️",
          },
          {
            case: "Dative",
            form: "kotu",
            plural: "kotom",
            use: "Shows who is receiving something.",
            example: "Daję kotu mleko. (I give milk to the cat.)",
            emoji: "🎁",
          },
          {
            case: "Accusative",
            form: "kota",
            plural: "koty",
            use: "Direct object, affected by the action.",
            example: "Widzę kota. (I see the cat.)",
            emoji: "🎯",
          },
          {
            case: "Instrumental",
            form: "kotem",
            plural: "kotami",
            use: "What is being used to do something.",
            example: "Idę z kotem. (I am going with the cat.)",
            emoji: "🛠️",
          },
          {
            case: "Locative",
            form: "kocie",
            plural: "kotach",
            use: "Talks about the location or topic of something.",
            example: "Mówię o kocie. (I am talking about the cat.)",
            emoji: "🌍",
          },
          {
            case: "Vocative",
            form: "kocie",
            plural: "koty",
            use: "Used to directly address or call someone.",
            example: "Kocie, chodź tutaj! (Cat, come here!)",
            emoji: "👋",
          },
        ],
      };

      const conjugationData = [
        // Initial data setup for nouns
        nounConjugation,
        /*
            // Setup for adjectives (to be added later)
            {
              type: "adjective",
              word: "duży",
              data: [
                // Adjective-specific data
              ],
            },
      */
      ];
      function ConjugationCard({ entry }) {
        // Mapping gender names to emojis
        const genderEmoji = {
          masculine: "👦",
          feminine: "👧",
          neuter: "⚪",
        };

        return (
          <div className="card card-bordered w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body">
              <div className="flex flex-col w-full items-center text-center py-4 mb-4 bg-gray-100 rounded-lg shadow gap-4">
                <div className="flex flex-row items-center text-right gap-4 w-full px-6">
                  <p className="text-sm font-bold uppercase">{entry.type}</p>
                  <span
                    className="tooltip tooltip-right"
                    data-tip={entry.gender}
                  >
                    <span className="text-2xl">
                      {genderEmoji[entry.gender]}
                    </span>
                  </span>
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

      function ConjugationPage() {
        return (
          <div className="p-5">
            <h1 className="text-3xl font-bold mb-4 text-center">
              Polish Conjugation
            </h1>
            <div className="flex flex-wrap justify-center">
              {conjugationData.map((entry, index) => (
                <ConjugationCard key={index} entry={entry} />
              ))}
            </div>
          </div>
        );
      }

      ReactDOM.render(<ConjugationPage />, document.getElementById("root"));
    </script>
  </body>
</html>
