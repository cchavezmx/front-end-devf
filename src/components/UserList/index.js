import React, {Fragment, useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const UserList = () => {

    const [user, setUser ] = useState({})

    useEffect( () => {
        const USER_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/user`
        const getUsers = async () => {
            try {
            return await axios.get(USER_URI, {
                headers: { Authorization: `Bearer ${localStorage.getItem('tokenSaurio')}`}
            })
            } catch (error) {
            alert('Hay un error')    
            }
        };
        const resUsers = await getUsers();
        setUser(resUsers)
    }, [])

    const { isAuth } = useContext(AuthContext)
    if(!isAuth) return <Redirect to='/login' />

    return (  

        <Fragment>
        <h2>Lista de Usuarios</h2>
        {console.log(user)}
        </Fragment>
    );
}
 
export default UserList;

// TODO: 2:56:00 ME QUEDE