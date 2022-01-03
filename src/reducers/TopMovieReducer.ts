import { TopMovieActionType } from './types';

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;
export interface ITopMoviData {
  imdbID: string;
  Title: string;
  Watched: boolean;
}
type ITopMovieAction =
  | {
      type: typeof GET_TOP_MOVIES;
      payload: ITopMoviData[];
    }
  | {
      type: typeof TOGGLE_TOP_MOVIE_WATCHED;
      payload: string;
    };

type TopMovieState = ITopMoviData[];

export const TopMovieReducer = (
  state: TopMovieState,
  action: ITopMovieAction,
) => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return action.payload;
    case TOGGLE_TOP_MOVIE_WATCHED:
      return state.map((item) =>
        item.imdbID === action.payload
          ? { ...item, Watched: !item.Watched }
          : item,
      );

    default:
      throw new Error();
  }
};
