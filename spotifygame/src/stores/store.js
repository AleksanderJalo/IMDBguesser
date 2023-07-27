import { create } from "zustand";

export const useStore = create((set) => ({
  movies: [],
  addMovies: (newMovies) =>
    set((state) => {
      return { movies: [...state.movies, ...newMovies] };
    }),
}));
