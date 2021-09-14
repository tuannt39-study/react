import Navbar from "./components/Navbar";
import Todos from './components/Todos'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Todos />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
