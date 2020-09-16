import React, { Fragment } from 'react';
//IMPORTAMOS React y restruccturamos Fragment para no tener que escribir react.fragmente en el reenderizador.

// Componentes
import Navigation from './components/Navigation'  // tenemos que incluir el archivo 
import Footer from './components/Footer'

//Context
import AuthContextProvider from './context/AuthContext'
// import HolaMundo from './HolaMundo.js'
/*Ejemplo de uso de context*/

// VARIOS
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from 'reactstrap'
import Routes from './Routes'

// PARA QUE FUNCIONEN LAS RUTAS O LOS REDIRECCIONAMIENTOS TENEMOS QUE ENVOLVER NUESTRA APLICACION CON EL ROUTER LINEA 27 DEL CODIGO



function App() {
  return (
    // Representa un Div en blanco es necesairo para la estructura del return 
    <Fragment>
      {/* Inciamos la capra de las Routas */}
      <Router>
      {/* Es para poder usar variables entre capas */}
    <AuthContextProvider>
      {/* Es la barra de Navegacion */}
      <Navigation/> 
      {/* Es la estructura de la pagina */}
      <Container className="mt-4">
        {/* Necesairo para agregar las Rutas */}
        <Switch>
            { Routes }
        </Switch>       
      </Container>
      <Container className="themed-container" fluid={true}>
      <Footer className="footer"/>
      </Container>
      {/* <HolaMundo /> */}
      </AuthContextProvider>
      </Router>
      </Fragment>
  );
}

export default App;
