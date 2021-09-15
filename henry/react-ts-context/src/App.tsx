import './App.css';

import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import Movies from './components/Movies';

import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import MovieContextProvider from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies />
            <ToggleTheme />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
