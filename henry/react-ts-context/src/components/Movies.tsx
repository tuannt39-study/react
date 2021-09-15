import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core';
import { ChangeEvent, Fragment, useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import { MovieContext } from '../contexts/MovieContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieChip: {
      fontSize: '2rem',
      padding: '30px 10px',
      margin: '5px',
    },
    movieInput: {
      marginRight: '5px',
    },
  })
);

export const Movies = () => {
  const classes = useStyles();

  const [movie, setMovie] = useState('');

  const { theme } = useContext(ThemeContext);

  const { movies, addMovie, deleteMovie } = useContext(MovieContext);

  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;

  const onMovieChange = (event: ChangeEvent<HTMLInputElement>) => {
    const movieChange = event.target.value;
    setMovie(movieChange);
  };

  const onMovieAddClick = (movieAdd: string) => {
    if (movieAdd) {
      addMovie(movieAdd);
      setMovie('');
    } else {
      alert('movie invalid')
    }
  };

  const onMovieDeleteClick = (id: string) => {
    deleteMovie(id);
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieChange}
          value={movie}
        />
        <Button variant="contained" color={chipTheme} onClick={() => onMovieAddClick(movie)}>
          Add
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            onDelete={() => onMovieDeleteClick(movie.id)}
            className={classes.movieChip}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default Movies;
