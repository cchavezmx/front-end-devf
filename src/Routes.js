/*EN ESTE DOCUMENTO GUARDAMOS LAS RUTAS DE NESTRA PAGINA */
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import UserList from './components/UserList'

// Vistas
import Home from './Views/Home'
import Login from './Views/Login'
import Logout from './Views/Logout'
import Signup from './Views/Signup'

export default 
    <Fragment>
        <Route exact path="/" component={Home} />        
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={UserList} />
    </Fragment>


// TODO 19:44