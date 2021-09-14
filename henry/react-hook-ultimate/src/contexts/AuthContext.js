import React, { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/AuthReducer'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, dispatch] = useReducer(authReducer, false)

  useEffect(() => {
    alert(isAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see todos.')
  }, [isAuthenticated])

  const AuthContextData = {
    isAuthenticated,
    dispatch
  }

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
