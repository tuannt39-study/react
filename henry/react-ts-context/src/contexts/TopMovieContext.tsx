import { ReactNode, useReducer, createContext } from 'react';
import {
  topMovieReducer,
  TopMovie,
  TopMovieAction,
  TopMovieState,
} from '../reducers/TopMovieReducer';
import { TopMovieActionType } from '../reducers/types';
import topMoviesInfo from '../api/getTopMovies';

interface TopMovieContextProviderProps {
  children: ReactNode;
}

export interface TopMovieApi {
  data: TopMovie;
}

const topMoviesDefault: TopMovieState = [];

export interface TopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}

const topMovieDataDefault: TopMovieContextDefault = {
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: () => {},
};

export const TopMovieContext = createContext<TopMovieContextDefault>(topMovieDataDefault);

export const TopMovieContextProvider = (props: TopMovieContextProviderProps) => {
  const { children } = props;

  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);

  const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

  const getTopMovies = async () => {
    const topMovies: TopMovieApi[] = await Promise.all(topMoviesInfo);
    const payload = topMovies.map((topMovie) => ({ ...topMovie.data, Watched: false }));
    const topMoviesData: TopMovieAction = {
      type: GET_TOP_MOVIES,
      payload,
    };
    dispatch(topMoviesData);
  };

  const toggleWatched = (imdbID: string) => {
    const topMovie: TopMovieAction = { type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID };
    dispatch(topMovie);
  };

  const topMovieContextData: TopMovieContextDefault = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  return (
    <TopMovieContext.Provider value={topMovieContextData}>{children}</TopMovieContext.Provider>
  );
};

export default TopMovieContextProvider;
