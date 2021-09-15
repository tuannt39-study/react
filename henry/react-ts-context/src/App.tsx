import './App.css';
import { Grid } from '@material-ui/core';

import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import Movies from './components/Movies';
import TopMovies from './components/TopMovies';

import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import MovieContextProvider from './contexts/MovieContext';
import AuthContextProvider from './contexts/AuthContext';
import TopMovieContextProvider from './contexts/TopMovieContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <TopMovieContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleTheme />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </TopMovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
