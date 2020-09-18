import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => { 

  const [isAuth, setIsAuth]  = useState(false);
  const [token, setToken] = useState('')

  useEffect(() => {
    const item = localStorage.getItem('tokenSaurio')
    if(item) {
      setToken(item);
      setIsAuth(true)
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{
     token, setToken,
     isAuth, setIsAuth}}>
      { props.children }
    </AuthContext.Provider>
  )
};

// TODO 1:41:31 AQUI ME QUEDE 

export default AuthContextProvider;


