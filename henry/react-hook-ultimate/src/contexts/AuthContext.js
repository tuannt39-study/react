import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false)

  const toggleAuth = () => {
    setAuthentication(!isAuthenticated)
  }

  const AuthContextData = {
    isAuthenticated,
    toggleAuth
  }

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
