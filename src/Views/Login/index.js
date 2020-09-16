import React from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, Container, Row, Col, FormText } from 'reactstrap';
import './login.css'

function Login() {
    return (
        <React.Fragment>
            <div  className="div-form.center">
            <Container  className="form-container">
                <Form>
                {/* <Row xs="2"> */}
                <h1 className="mb-4">Login</h1>
                    <Col>
                    <FormGroup>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>@</InputGroupText>
                            <Input type="email" name="email" id="email" placeholder="Escribe tu correo" ></Input>
                        </InputGroupAddon>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                    <InputGroup>
                        <Input type="password" name="passwordLogin" id="password" placeholder="Escriba su contraseña"/>
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
