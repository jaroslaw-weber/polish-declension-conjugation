# about

Use this to prompt chat gpt to get new words.

# prompt

Please generate json-like locale/config file for this word: WORD_HERE

English:

```

//cat
"word:cat": "cat",
"word:cat:type": "noun",
"word:cat:gender": "masculine",
"word:cat:emoji": "🐱",
"word:cat:nominative:example": "The cat is big.",
"word:cat:genitive:example": "There is no cat in the house.",
"word:cat:dative:example": "I give the cat some milk.",
"word:cat:accusative:example": "I see the cat.",
"word:cat:instrumental:example": "I am walking with the cat.",
"word:cat:locative:example": "I am talking about the cat.",
"word:cat:vocative:example": "Cat, come here!",
```

Polish:

```
//cat
"word:cat": "kot",

"word:cat:nominative": "kot",
"word:cat:genitive": "kota",
"word:cat:dative": "kotu",
"word:cat:accusative": "kota",
"word:cat:instrumental": "kotem",
"word:cat:locative": "kocie",
"word:cat:vocative": "kocie",

"word:cat:nominative:example": "Kot jest duży.",
"word:cat:genitive:example": "W domu nie ma kota.",
"word:cat:dative:example": "Daję kotu mleko.",
"word:cat:accusative:example": "Widzę kota.",
"word:cat:instrumental:example": "Idę z kotem.",
"word:cat:locative:example": "Mówię o kocie.",
"word:cat:vocative:example": "Kocie, chodź tutaj!",
```

Korean:

```

//cat
"word:cat": "고양이",

"word:cat:nominative:example": "고양이가 크다.",
"word:cat:genitive:example": "집에 고양이가 없다.",
"word:cat:dative:example": "고양이에게 우유를 준다.",
"word:cat:accusative:example": "고양이를 본다.",
"word:cat:instrumental:example": "고양이와 함께 걷고 있다.",
"word:cat:locative:example": "고양이에 대해 이야기하고 있다.",
"word:cat:vocative:example": "고양이야, 여기로 와!",
```

It is important that english has some extra config (emoji etc) and polish have the "case" part ("word:cat:nominative").
This is for a tool to learn Polish conjugation that also have Korean locale.
