import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
  
} from 'reactstrap';


/* Para usar useContext, necesitamos agregar la etiqueta del contexto en el app que es de donde se reenderiza nuestra aplicacion
despues de agregar la etiqueta del context, agregamos en donde vamos a usar las propiedades del context
agreagamos useContext y despues de requrirlo podemos acceder a los metodos del Autcontexto por medio de 
destruccturacion Linea 25 y uso en linea 34 */

/* Ahora son dos partes, la parate en envuelve la la funcion, que se declara en la parte donde se reenderiza la aplicacion
y la segunda que es la variable que contiene los metodos de la funcion context */

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useContext(AuthContext)
   
  const toggle = () => setIsOpen(!isOpen);

  const publicNavbar = () => {
  return (
      <div className="body">
        <Navbar color="navbar navbar-dark bg-dark" light expand="md">
          <NavbarBrand href="/">Mi LOGO</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/login">Iniciar Sesión</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Registro</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>);
  }

  const authNavbar = () =>{

    return (
      <div className="body">
        <Navbar color="navbar navbar-dark bg-dark" light expand="md">
          <NavbarBrand tag={Link} to="/">{`¡Hola, ${user.first_name}!`}</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem className="mr-auto">
                  <NavLink href="/logout">
                    Logout
                  </NavLink>
                </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <Redirect to="/users" />
      </div>);
  }
  
  return (
    <React.Fragment>
      { isAuth 
          ? authNavbar()
          : publicNavbar()}
    </React.Fragment>
  )
   
}

export default Navigation;

