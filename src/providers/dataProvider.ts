import { create } from "zustand";

type StoreState = {
  active: number;
  darkMode: boolean | null;
  setActive: (newActive: number) => void;
  setDarkMode: (newDarkMode: boolean) => void;
};

export const useStore = create<StoreState>((set) => ({
  active: 1,
  darkMode: null,
  setActive: (newActive: number) => set({ active: newActive }),
  setDarkMode: (newDarkMode: boolean) => set({ darkMode: newDarkMode }),
}));
