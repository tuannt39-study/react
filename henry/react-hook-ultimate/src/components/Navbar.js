import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)

  const { isLightTheme, light, dark } = theme
  const style = isLightTheme ? light : dark

  return (
    <div className='navbar' style={style}>
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? 'You are logged in ' : ''}
          <button
            onClick={() => {
              toggleAuth()
            }}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
