import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: 'rgb(240, 240, 240)',
      color: 'black',
      cursor: 'pointer'
    },
    dark: {
      background: 'rgb(39, 39, 39)',
      color: 'white',
      cursor: 'pointer'
    }
  })

  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme
    })
  }

  const themeContextData = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
