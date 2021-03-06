This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



## Apuntes React 🚀 

### `EL USO DE CONTEXT`
___

Creamos en la raiz una carpeta llamada Context, creamos una funcion de react que nos ayudara intercambiar parametros dentro de todo el proyecto. 

### 1️
En App, agreamos la capa que envuelve a todas los demas componentes y son entre estos podemos intercambiar valores en las variables del contexto

### 2️
Con el uso de useState podemos setear estas varabiles, gracias a sus estructura:

````bash
const [value, setValue] = useState('')
````

En esta aplicacion un ejemplo del uso de context se da en la vista de Login que una vez que las creedenciales son correctas cambia el estado de la variable (Linea 24 de la vista de Login.) de setIsAuth a true, hay que notar que desde el contexto esta variable se la da el valor de false, al pasar el valor de false a true a la varaible setIsAuth, de inmediato la variable isAuth ligada a setIsAuth cambia y con este valor dentro de la barra de navegacion hacemos uso de esta variable de la siguiente forma: 
 
````javascript
   return (
    <React.Fragment>
      { isAuth 
          ? authNavbar()
          : publicNavbar()}
    </React.Fragment>
  )
````
Antes hay que aclarar que se crearon dos aplicaciones tipo flecha. una barra publica, y una barra privada.

Y de esta forma si el valor de isAuth cambia de falso a verdadero renderizamos la barra de navegacion de publico a privado.

### `EL USO DE useEffect`
___

Este hook esta al "pendiente" de algun cambio valor de una variable, declarada dentro del arreglo, si el arreglo se deja vacio quiere decir que el contenido declarado dentro del nuestro hook se inicializara una vez al acceder a nuestro componente se declara de la siguiente forma: 

````javascript
  useEffect(() => {
    const item = localStorage.getItem('tokenSaurio')
    if(item) {
      setToken(item);
      setIsAuth(true)
    }
  }, [])
````
En este ejemplo y uso que se le da dentro de esta aplicación, se declara useEffect dentro de la funcion le damos un valor al token y estado del usuario (setIsAuth)
al declarar el arreglo como vacio, le decimos a nuestra aplicacion que solo se ejecute una vez. 

## Proteger Rutras y Redireccionamientos. 

Asi de simple al redenrizar complementos 

````javascript
    const { isAuth } = useContext(AuthContext)
    if(!isAuth) return <Redirect to='/login' />
````