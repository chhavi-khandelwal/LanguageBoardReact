export interface Language {
  id: number;
  label: string;
  score: Score;
  flag: string;
  color: string;
}

export interface Language {
  value?: number;
  selected?: boolean;
}

export type Score = {
  done: string;
  todo: number;
  unverified: number;
};

export interface Store {
  updateLanguages: (l: Language[]) => void;
  updateLanguageData: (l: Language[]) => void;
  removeLanguage: (l: number) => void;
  languages: Language[];
  languageData: Language[];
}
