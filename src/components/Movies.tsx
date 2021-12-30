import {
  Box,
  Button,
  Chip,
  makeStyles,
  PropTypes,
  TextField,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { MovieContext } from 'src/contexts/MovieContext';
import { ThemeContext } from 'src/contexts/ThemeContext';
interface IMovie {
  id: string;
  title: string;
}
const useStyle = makeStyles({
  movieInput: {
    marginRight: '5px',
  },
  movieChip: {
    marginRight: '5px',
  },
});
const Movies = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  const themChip = theme as Exclude<PropTypes.Color, 'inherit'>;
  const classes = useStyle();
  const onMovieInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMovieTitle(value);
  };
  const onAddMovie = (e: React.MouseEvent<HTMLElement>) => {
    movieTitle && addMovie(movieTitle);
    setMovieTitle('');
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.movieInput}
          value={movieTitle}
          onChange={onMovieInputChange}
        />
        <Button variant="outlined" color={theme} onClick={onAddMovie}>
          Primary
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {movies &&
          movies.length > 0 &&
          movies.map((item) => (
            <Chip
              key={item.id}
              variant="outlined"
              label={item.title}
              onDelete={deleteMovie.bind(this, item.id)}
              color={themChip}
              className={classes.movieChip}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;
