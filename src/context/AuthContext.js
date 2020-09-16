import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => { 

  const [nombre, setNombre]  = useState('');
  
  return (
    <AuthContext.Provider value={{nombre, setNombre}}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;


