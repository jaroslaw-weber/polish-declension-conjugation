export interface ConjugationData {
  case: string;
  form: string;
  plural: string;
}
export interface Conjugation {
  type: string;
  word: string;
  gender: Gender;
  data: ConjugationData[];
}

export type Gender = "masculine" | "feminine" | "neuter";
