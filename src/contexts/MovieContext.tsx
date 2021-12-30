import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface IMoverProvider {
  children: ReactNode;
}
interface IMovie {
  id: string;
  title: string;
}
interface IMovieProviderData {
  movies: IMovie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}
const MovieProviderDefaultData: IMovieProviderData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};
export const MovieContext = createContext<IMovieProviderData>(
  MovieProviderDefaultData,
);

const MovieProvider = ({ children }: IMoverProvider) => {
  const [movies, setMovie] = useState(MovieProviderDefaultData.movies);
  const MovieProviderData = {
    movies,
    addMovie: (title: string) => {
      const newMovie = {
        id: uuidv4(),
        title,
      };
      setMovie([...movies, newMovie]);
    },
    deleteMovie: (id: string) => {
      const newMovies = movies.filter((item) => item.id !== id);
      setMovie(newMovies);
    },
  };

  return (
    <MovieContext.Provider value={MovieProviderData}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;
