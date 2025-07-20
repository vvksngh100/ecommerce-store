import { create } from 'zustand';

export const useFilterStore = create((set) => ({
  searchQuery: '',
  category: 'all',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (category) => set({ category }),
}));