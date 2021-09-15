import './App.css';

import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import Movies from './components/Movies';

import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import MovieContextProvider from './contexts/MovieContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <Movies />
              <ToggleTheme />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
