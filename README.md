# oData con promesas

La funcionalidad principal de este proyecto es encapsular las llamadas oData en promesas, para aprovechar sus funcionalidades y mejorar la legibilidad.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu entorno de desarrollo.

### Pre-requisitos 📋

Se utilizan características de JavaScript ES6, por lo que solo funciona en navegadores que lo soporten. Para evitar que el IDE las marque como erróneas hay que indicarle que el código sigue esta versión.

Para hacerlo en SAP WebIDE haz click derecho en la carpeta del proyecto, ve a `project/project settings`
![image](https://user-images.githubusercontent.com/79256120/110140657-9c139580-7dd4-11eb-9cb1-f6d834368f72.png)

Ve a `Code Checking/JavaScript/Validator Configuration` y en `env` añade `"es6": true`
![image](https://user-images.githubusercontent.com/79256120/110140533-7b4b4000-7dd4-11eb-8089-f94e07d9faf1.png)

### Instalación 🔧

Con clonar el proyecto en tu entorno de desarrollo es suficiente. No tiene niguna dependencia y está listo para ser usado.

## Ejecutando las pruebas ⚙️

La suite de test está realizada en qUnit. Para lanzarla en SAP WebIDE, es suficiente con añadir una configuración `Run as Unit Test` indicando la ruta del archivo de test `/webapp/test/unit/unitTests.qunit.html` y ejecutarla.

### Análisis de las pruebas 🔩

Se verifica que las funciones success y error definidas son invocadas cuando la promesa se resuelve correcta o incorrectamente.

### Pruebas manuales

En el archivo `/webapp/view/Main.view.xml` hay definidos 4 botones, cada uno asociado a una de las funciones CRUD del oData y una tabla donde se muestra el resultado de realizar estas acciones.
![image](https://user-images.githubusercontent.com/79256120/110144017-27425a80-7dd8-11eb-8237-ffecb817e483.png)

Para poder hacer estas pruebas se incluye un mockserver. [En este enlace](http://programandosap.com/mockear-un-servicio-odata-en-sapui5/) puedes ver como se ha realizado y una explicación de como configurar el entorno para utilizarlo.

## Utilización 📦

Tan solo necesitas copiar y pegar el archivo `ODataPromise.js` en tu proyecto. Está localizado en `/webapp/model/` pero puedes situarlo en la ruta que prefieras.

En el archivo `/webapp/controller/Main.js` hay un ejemplo de código para realizar las llamadas CRUD en las funciones `onCreate`, `onRead`, `onUpdate` y `onRemove`.

## Construido con 🛠️

* [SAPui5](https://sapui5.hana.ondemand.com/) - El framework web
* [qUnit](https://qunitjs.com/) - La herramienta de testing
