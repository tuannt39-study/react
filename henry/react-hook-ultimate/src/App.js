import Navbar from "./components/Navbar";
import Todos from './components/Todos'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import TodoContextProvider from './contexts/TodoContext'
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
