import React, { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode'

export const AuthContext = createContext();

const AuthContextProvider = (props) => { 
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth]  = useState(false);
  const [user, setUser] = useState('')

  const loginUser = async (token) => {
    localStorage.setItem('tokenSaurio', token)
    setToken(token)
    const user = await decode(token)
    setUser(user)
    setIsAuth(true)
  }

  const logoutUser = async () => {
    localStorage.removeItem('tokenSaurio')
    setToken('')
    setUser({});
    setIsAuth(false);
  }

  useEffect(() => {
    const item = localStorage.getItem('tokenSaurio')
    if(item) {
      setToken(item)
      const decoded = decode(item)
      setIsAuth(true)
      setUser(decoded)
                  
  }}, [])
  
  return (
    <AuthContext.Provider value={{
     token, setToken,
     isAuth, setIsAuth,
     user, loginUser, logoutUser
     
     }}>
      { props.children }
    </AuthContext.Provider>
  )
};

// TODO 1:41:31 AQUI ME QUEDE 

export default AuthContextProvider;


