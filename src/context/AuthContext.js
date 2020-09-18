import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => { 

  const [isAuth, setIsAuth]  = useState(false);
  const [token, setToken] = useState('')
  
  return (
    <AuthContext.Provider value={{
     token, setToken,
     isAuth, setIsAuth}}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;


