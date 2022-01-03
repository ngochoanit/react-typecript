import axios from 'axios';
import React, { createContext, ReactNode, useReducer } from 'react';
import TopMovieData from 'src/api/getTopmovies';
import { ITopMoviData, TopMovieReducer } from 'src/reducers/TopMovieReducer';
import { TopMovieActionType } from 'src/reducers/types';

interface TopMovieProviderProps {
  children: ReactNode;
}
const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;
const topMovieDefault: ITopMoviData[] = [];
interface TopMovieContextData {
  topMovie: ITopMoviData[];
  getTopMovies: () => Promise<void>;
  toggleTopMovieWatched: (imdbID: string) => void;
}
const TopMovieContextDataDefault = {
  topMovie: topMovieDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleTopMovieWatched: () => {},
};

export const TopMovieContext = createContext<TopMovieContextData>(
  TopMovieContextDataDefault,
);
const TopMovieProvider = ({ children }: TopMovieProviderProps) => {
  const [topMovie, dispatch] = useReducer(TopMovieReducer, topMovieDefault);
  const getTopMovies = async () => {
    const topMovies = await Promise.all(TopMovieData);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((item) => ({ ...item.data, Watched: false })),
    });
  };
  const toggleTopMovieWatched = (imdbID: string) => {
    dispatch({
      type: TOGGLE_TOP_MOVIE_WATCHED,
      payload: imdbID,
    });
  };
  const TopMovieContextData = {
    topMovie,
    getTopMovies,
    toggleTopMovieWatched,
  };
  return (
    <TopMovieContext.Provider value={TopMovieContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};
export default TopMovieProvider;
