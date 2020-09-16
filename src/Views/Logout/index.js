import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout() {
    return (
        <div>
          <h1>Sesion cerrada con exito</h1>
          <Redirect to="/login" />
        </div>
    )
    
}

export default Logout
