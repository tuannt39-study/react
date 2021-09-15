import './App.css';

import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';

import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <ToggleTheme />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
