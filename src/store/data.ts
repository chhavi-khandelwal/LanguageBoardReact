import { Language } from './language.types';
import { LanguageColors } from './languageColors';

export const languages: Language[] = [
  {
    id: 1,
    label: 'French',
    color: LanguageColors.french,
    score: {
      done: '40%',
      todo: 2245,
      unverified: 123,
    },
    flag: 'french.png',
  },
  {
    id: 2,
    label: 'English',
    color: LanguageColors.english,

    score: {
      done: '20%',
      todo: 245,
      unverified: 50000,
    },
    flag: 'english.png',
  },
  {
    id: 3,
    label: 'Spanish',
    color: LanguageColors.spanish,

    score: {
      done: '80%',
      todo: 1245,
      unverified: 143,
    },
    flag: 'spanish.png',
  },
  {
    id: 4,
    label: 'Macedonian',
    color: LanguageColors.macedonian,

    score: {
      done: '60%',
      todo: 12245,
      unverified: 22123,
    },
    flag: 'macedonian.png',
  },
  {
    id: 5,
    label: 'German',
    color: LanguageColors.german,

    score: {
      done: '30%',
      todo: 2245,
      unverified: 1230,
    },
    flag: 'german.png',
  },
  {
    id: 6,
    label: 'Italian',
    color: LanguageColors.italian,

    score: {
      done: '90%',
      todo: 2245,
      unverified: 123,
    },
    flag: 'italian.png',
  },
  {
    id: 7,
    label: 'Hindi',
    color: LanguageColors.hindi,

    score: {
      done: '43%',
      todo: 2245,
      unverified: 123,
    },
    flag: 'hindi.png',
  },
  {
    id: 8,
    label: 'Portugal',
    color: LanguageColors.portugal,

    score: {
      done: '50%',
      todo: 23245,
      unverified: 23,
    },
    flag: 'spanish.png',
  },
  {
    id: 9,
    label: 'Sanskrit',
    color: LanguageColors.sanskrit,

    score: {
      done: '40%',
      todo: 22345,
      unverified: 12333,
    },
    flag: 'hindi.png',
  },
  {
    id: 10,
    label: 'African',
    color: LanguageColors.african,

    score: {
      done: '76%',
      todo: 21245,
      unverified: 13,
    },
    flag: 'german.png',
  },
];
