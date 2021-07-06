import create from 'zustand';
import { languages } from './data';
import { Language, Store } from './language.types';
import { persist } from 'zustand/middleware';

const store = (set: any) => ({
  languages: [],
  updateLanguages: (languages: Language[]) => {
    set((state: Store) => ({ languages: [...state.languages, ...languages] }));
  },
  updateLanguageData: (languages: Language[]) => {
    const ids = languages.map((l) => l.id);
    set((state: Store) => {
      let languageData = state.languageData;

      languageData = languageData.map((lD) => {
        if (ids.indexOf(lD.id) > -1) {
          lD.selected = true;
        }
        return lD;
      });
      return { languageData };
    });
  },
  removeLanguage: (id: number) => {
    set((state: Store) => {
      let languageData = state.languageData;
      let languages = state.languages;

      languageData.map((lD) => {
        if (id === lD.id) {
          lD.selected = false;
        }
        return lD;
      });

      return {
        languageData,
        languages: [...languages.filter((l) => l.id !== id)],
      };
    });
  },
  languageData: languages,
});

const persistedStore = persist<Store>(store, {
  name: 'language-storage',
});

export const useStore = create<Store>(persistedStore);
