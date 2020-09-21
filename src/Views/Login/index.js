import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, Container, Col, FormText } from 'reactstrap';
import './login.css'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loginUser } = useContext(AuthContext)

    const handleForm = async (e) => {
        e.preventDefault()
            const jsonSend = { email, password }
            const LOGIN_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/login`
            try {
            const res = await axios.post(LOGIN_URI, jsonSend)
            loginUser(res.data.token)
                                                  
            } catch (error) {
                console.log(error)
                alert('error al escribir el usuario o contraseña')              
            }
    }

    return (
        <React.Fragment>
            <div  className="div-form.center">
            <Container  className="form-container">
                <Form onSubmit={handleForm}>
                {/* <Row xs="2"> */}
                <h1 className="mb-4">Login</h1>
                    <Col>
                    <FormGroup>
                        <Label>ID de Usuario</Label>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>@</InputGroupText>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email" 
                                id="email" 
                                placeholder="Escribe tu correo" 
                                ></Input>   
                        </InputGroupAddon>
                        <FormText>El ID es tu dirección de correo</FormText>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <InputGroup>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="passwordLogin"
                            id="password"
                            placeholder="Escriba su contraseña"/>
                        <InputGroupAddon addonType="append">
                        <Button color="danger" className="button-submit">Login</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </FormGroup>
                    </Col>
                {/* </Row> */}
                </Form>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default Login
