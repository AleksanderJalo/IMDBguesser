import { create } from "zustand";

export const useStore = create((set) => ({
  movies: [],
  genres: [],
  addMovies: (newMovies) =>
    set((state) => {
      return { movies: [...state.movies, ...newMovies] };
    }),
  setGenres: (newGenres) => set(()=> {return{ genres: newGenres}})
}));
