import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

// PARA EL USO DEL CONTEXTO
import { AuthContext } from '../../context/AuthContext'


function Logout() {

  // SETEAR LAS VARIABLES setToken y setIsAuth en vacio y en falso
    const {setToken, setIsAuth} = useContext(AuthContext)

    setToken('')
    setIsAuth(false)

  //Elimna el token guardado
    localStorage.removeItem('tokenSaurio')

    return (
        <div>
          <h1>Sesion cerrada con exito</h1>
          
          <Redirect to="/login" />
        </div>
    )
    
}

export default Logout
