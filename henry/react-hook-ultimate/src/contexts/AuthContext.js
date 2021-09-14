import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false)

  useEffect(() => {
    alert(isAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see todos.')
  }, [isAuthenticated])

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
