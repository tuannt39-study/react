import { TopMovieActionType } from './types';

export interface TopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}

export type TopMovieState = TopMovie[] | string;

export type TopMovieAction = {
  type: TopMovieActionType;
  payload: TopMovieState;
};

export const topMovieReducer = (state: TopMovieState, action: TopMovieAction) => {
  const { type, payload } = action;
  const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

  switch (type) {
    case GET_TOP_MOVIES:
      return payload;
    case TOGGLE_TOP_MOVIE_WATCHED:
      if (Array.isArray(state)) {
        const movies = state.map((topMovie) =>
          topMovie.imdbID === action.payload ? { ...topMovie, Watched: !topMovie.Watched } : topMovie
        );
        return movies;
      }
      return state;
    default:
      return state;
  }
};
