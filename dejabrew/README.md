# Inicializar un proyecto con React

Para inicializar un proyecto con React, podemos usar el comando ``npx create-react-app``. Este comando creará una carpeta con el nombre del proyecto y la inicializará con todos los archivos necesarios para empezar a desarrollar.

Por ejemplo, para crear un proyecto llamado ``mi-proyecto``, ejecutaríamos el siguiente comando:

``npx create-react-app mi-proyecto``
Esto creará una carpeta llamada ``mi-proyecto`` con los siguientes archivos:

``package.json``: Este archivo contiene la información sobre el proyecto, como su nombre, versión, dependencias, etc.
``src/App.js``: Este archivo contiene el componente principal de la aplicación.
``index.js``: Este archivo es el punto de entrada de la aplicación.
``README.md``: Este archivo contiene información sobre el proyecto.
Una vez que hayamos inicializado el proyecto, podemos empezar a desarrollar. Para ejecutar la aplicación, podemos usar el comando ``npm start``. Este comando iniciará un servidor local en el puerto 3000.

## Estructura del proyecto

La estructura del proyecto creado por ``create-react-app`` es la siguiente:

```
mi-proyecto
  ├── node_modules
  ├── package.json
  ├── public
  │   ├── index.html
  │   └── favicon.ico
  └── src
      ├── App.js
      └── index.js
```
La carpeta ``node_modules`` contiene todas las dependencias del proyecto. La carpeta ``public`` contiene los archivos estáticos del proyecto, como el archivo ``index.html``. La carpeta ``src`` contiene el código fuente del proyecto.

## Componentes

Los componentes son la unidad básica de construcción de las aplicaciones React. Un componente es un bloque de código que puede ser reutilizado en diferentes partes de la aplicación.

Para crear un componente, podemos crear un archivo JS con el nombre del componente. Por ejemplo, para crear un componente llamado ``MiComponente``, crearíamos un archivo llamado ``MiComponente.js``.

El archivo ``MiComponente.js`` debe exportar una clase que extiende la clase ``React.Component``. La clase debe tener un método llamado render() que devuelve el elemento HTML que se mostrará en la pantalla.

Por ejemplo, el siguiente código crea un componente llamado ``MiComponente`` que muestra el texto "Hola, mundo":

### JavaScript
```
import React from "react";

class MiComponente extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola, mundo</h1>
      </div>
    );
  }
}

export default MiComponente;
```

## Propiedades

Los componentes pueden tener propiedades que se pueden usar para pasarle datos al componente. Las propiedades se definen como parámetros de la clase del componente.

Por ejemplo, el siguiente código crea un componente llamado ``MiComponente`` que tiene una propiedad llamada ``nombre``. La propiedad ``nombre`` se puede usar para pasar el nombre de una persona al componente.

### JavaScript
```
import React from "react";

class MiComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
    };
  }

  render() {
    return (
      <div>
        <h1>Hola, {this.state.nombre}</h1>
      </div>
    );
  }
}

export default MiComponente;
```
## Estado

El estado es una variable que se puede usar para almacenar datos que cambian durante la ejecución de la aplicación. El estado se define como una propiedad de la clase del componente.

Por ejemplo, el siguiente código crea un componente llamado ``MiComponente`` que tiene un estado llamado ``contador``. El estado ``contador`` se incrementa en uno cada vez que se hace clic en un botón.

### JavaScript
```
import React from "react";

class MiComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    return}
```
