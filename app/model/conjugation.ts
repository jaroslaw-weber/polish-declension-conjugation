import { Conjugation } from "../types/conjugation";

export const nounConjugation: Conjugation = {
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

export const conjugationData = [
	nounConjugation,
	
  ];