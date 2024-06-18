
export interface ConjugationData {
  case: string;
  form: string;
  plural: string;
  use: string;
  example: string;
  emoji: string;
}
export interface Conjugation {
  type: string;
  word: string;
  emoji: string;
  gender?: Gender;
  data: ConjugationData[];
}

export type Gender = "masculine" | "feminine" | "neuter";