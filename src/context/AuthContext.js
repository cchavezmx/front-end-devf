import React, { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode'

export const AuthContext = createContext();

const AuthContextProvider = (props) => { 
  const [isAuth, setIsAuth]  = useState(false);
  const [user, setUser] = useState('')

     // Se refactorizaron las funciones de Login y Logout

  const loginUser = async (token) => {
    localStorage.setItem('tokenSaurio', token)
    const user = await decode(token)
    setUser(user)
    setIsAuth(true)
  }

    // Se refactorizaron las funciones de Login y Logout

  const logoutUser = async () => {
    localStorage.removeItem('tokenSaurio')
    setUser({});
    setIsAuth(false);
  }

  useEffect(() => {
    const item = localStorage.getItem('tokenSaurio')
    if(item) {
      const decoded = decode(item)
      setIsAuth(true)
      setUser(decoded)
                  
  }}, [])
  
  return (
    <AuthContext.Provider value={{
     isAuth, setIsAuth,
     user, loginUser, logoutUser
     
     }}>
      { props.children }
    </AuthContext.Provider>
  )
};

// TODO 1:41:31 AQUI ME QUEDE 

export default AuthContextProvider;


