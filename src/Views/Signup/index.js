import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap';
import './Signup.css'

function Signup() {

// 1) definir los cuatro estados 

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignup, setisSignup]  = useState('') // se agrega este estado para poder redireccionar la pagina cuando el registro sea exitoso

/* 2) Enlazar los estados
       2.1 Para hacer esto, en el from le agregamos el valor que queremos enlazar (Linea 30)
       2.2 Para que se haga el cambio a este valor necesitamos incializar un evento llamando onchange que es un callback y con el evento.targe.value 
           setamos el valor gracias a useState asignado en el punto aterior (Linea 31)
*/ 
// 3) Habilitar el handleForm que tomara los valos de Form

    const handleForm = async (e) => {
        e.preventDefault() // Con esta linea prevenimos que actualice el formulario
        const jsonSend = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }
        const SIGNUP_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/signup`
        try {
         const res = await axios.post(SIGNUP_URI, jsonSend)
         if(res.status === 200)
            alert('Registro Exitoso')
            setisSignup(true)
        } catch (error) {
            console.log(error)
            alert("El correo ya está registrado")       
        }        
    }
        // Usamos Redirect de react-router-dom
        if(isSignup){
            return <Redirect to="/" />
        }

    return (      
        <React.Fragment>
            <Container className="form">
            <Form onSubmit={handleForm}> 
            <h1 className="mb-4">Registro</h1>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="inputFirstName"
                        id="firstName"
                        placeholder="Ingrese su nombre"/>
                </FormGroup>
                <FormGroup>
                <Label>Apellidos</Label>
                    <Input
                        type="text"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        name="inputLastname"
                        id="lastName"
                        placeholder="Ingrese sus Apellidos"/>
                </FormGroup>
                <FormGroup>
                    <Label>Correo</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="exampleEmail"
                        placeholder="Ingrese su dirección de correo"/>
                    <FormText>Su correo será su ID de usuario</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Contraseña</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        name="password"
                        id="examplePassword"
                        placeholder="Ingrese su contraseña" />
                </FormGroup>
                <Button color="danger">Registar</Button>
            </Form>
            </Container>
        </React.Fragment>
    )
}
export default Signup

