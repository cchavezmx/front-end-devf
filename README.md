This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



### `EL USO DE CONTEXT`
Creamos en la raiz una carpeta llamada Context, creamos una funcion de react que nos ayudara intercambiar parametros dentro de todo el proyecto. 

### 1️⃣
En App, agreamos la capa que envuelve a todas los demas componentes y son entre estos podemos intercambiar valores en las variables del contexto

### 2️⃣
Con el uso de useState podemos setear estas varabiles, gracias a sus estructura:

```
const [value, setValue] = useState('')

```

En esta aplicacion un ejemplo del uso de context se da en la vista de Login que una vez que las creedenciales son correctas cambia el estado de la variable (Linea 24 de la vista de Login.) de setIsAuth a true, hay que notar que desde el contexto esta variable se la da el valor de false, al pasar el valor de false a true a la varaible setIsAuth, de inmediato la variable isAuth ligada a setIsAuth cambia y con este valor dentro de la barra de navegacion hacemos uso de esta variable de la siguiente forma: 
 
``` 
   return (
    <React.Fragment>
      { isAuth 
          ? authNavbar()
          : publicNavbar()}
    </React.Fragment>
  )

```
Antes hay que aclarar que se crearon dos aplicaciones tipo flecha. una barra publica, y una barra privada.

Y de esta forma si el valor de isAuth cambia de falso a verdadero renderizamos la barra de navegacion de publico a privado.


