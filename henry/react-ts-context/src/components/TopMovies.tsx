import { useContext, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TopMovieContext } from '../contexts/TopMovieContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMoviesHeader: {
      paddingBottom: 0,
    },
    topMoviesList: {
      paddingTop: 0,
    },
    topMovieItem: {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  })
);

export const TopMovies = () => {
  const classes = useStyles();

  const { topMovies, getTopMovies, toggleWatched } = useContext(TopMovieContext);

  useEffect(() => {
    getTopMovies();
  }, []);

  const onMovieClick = (imdbID: string) => {
    toggleWatched(imdbID);
  };

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.topMoviesHeader}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center',
            color: 'primary',
          }}
        />
        <CardContent className={classes.topMoviesList}>
          <List>
            {Array.isArray(topMovies) &&
              topMovies.map((movie) => (
                <ListItem
                  button
                  key={movie.imdbID}
                  className={classes.topMovieItem}
                  onClick={() => onMovieClick(movie.imdbID)}
                >
                  <ListItemIcon>
                    <Checkbox checked={movie.Watched} />
                  </ListItemIcon>
                  <ListItemText primary={movie.Title} />
                </ListItem>
              ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;
