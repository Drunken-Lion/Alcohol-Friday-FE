import { create } from 'zustand';

interface KeywordInfo {
  keyword: string;
  setKeyword: (state: string) => void;
}

export const useSearchStore = create<KeywordInfo>((set) => ({
  keyword: '',
  setKeyword: (newKeyword: string) => set((state) => ({ ...state, keyword: newKeyword })),
}));

interface CategoriesInfo {
  category: string;
  setCategory: (state: string) => void;
}

export const useCategoriesStore = create<CategoriesInfo>((set) => ({
  category: '',
  setCategory: (newCategory: string) => set((state) => ({ ...state, category: newCategory })),
}));
