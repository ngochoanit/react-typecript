import React, { useContext, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { TopMovieContext } from 'src/contexts/TopMovieContext';

const useStyle = makeStyles({
  topMovieHeader: {
    paddingBottom: '5px',
  },
  topMovieList: {
    paddingTop: 0,
  },
  topMovieItem: {
    paddingTop: '2px',
    paddingBottom: '2px',
  },
});

const TopMovie = () => {
  const { topMovie, getTopMovies, toggleTopMovieWatched } =
    useContext(TopMovieContext);
  useEffect(() => {
    getTopMovies();
  }, []);
  const classes = useStyle();
  return (
    <Box m={3}>
      <Card>
        <CardHeader
          className={classes.topMovieHeader}
          title="Top 10 movies of all time"
          titleTypographyProps={{
            variant: 'h4',
            align: 'center',
            color: 'primary',
          }}
        ></CardHeader>

        <CardContent>
          <List>
            {topMovie &&
              topMovie.length > 0 &&
              topMovie.map((item) => (
                <ListItem
                  button
                  key={item.imdbID}
                  onClick={(e) => {
                    toggleTopMovieWatched(item.imdbID);
                  }}
                >
                  <ListItemIcon>
                    <Checkbox checked={item.Watched} />
                  </ListItemIcon>
                  <ListItemText primary={item.Title} />
                </ListItem>
              ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovie;
