import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface MovieContextProviderProps {
  children: ReactNode;
}

export interface Movie {
  id: string;
  title: string;
}

export interface MovieContextDefault {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}

const movieDataDefault: MovieContextDefault = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(movieDataDefault);

export const MovieContextProvider = (props: MovieContextProviderProps) => {
  const { children } = props;

  const [movies, setMovies] = useState<Movie[]>(movieDataDefault.movies);

  const addMovie = (title: string) => {
    const movie: Movie = {
      id: uuidv4(),
      title,
    };
    setMovies([...movies, movie]);
  };

  const deleteMovie = (id: string) => {
    const moviesFilter: Movie[] = movies.filter((movie) => movie.id !== id);
    setMovies(moviesFilter);
  };

  const MovieContextData: MovieContextDefault = { movies, addMovie, deleteMovie };

  return <MovieContext.Provider value={MovieContextData}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
