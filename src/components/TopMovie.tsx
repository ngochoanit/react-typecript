import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { List } from '@material-ui/icons';

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
            <ListItem button>
              <ListItemIcon>
                <Checkbox edge="start" />
              </ListItemIcon>
              <ListItemText primary="asdasdasd" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovie;
