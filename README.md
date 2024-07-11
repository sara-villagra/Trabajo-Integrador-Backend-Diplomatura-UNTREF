# Proyecto Integrador: CRUD con Node.js y MongoDB

## Descripción del Proyecto

En este proyecto, desarrolla una aplicación basada en Node.js, express y MongoDB, que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos correspondiente a accesorios de computación y  usuarios registrados con control de errores.
Se agregó librerias como dependencias para  optimizar su funcionalidad, como Mongoose y Morgan.   
Se implementó autenticación y autorización para que solo los usuarios autenticados puedan realizar operaciones sobre rutas protegidas utilizando JSON Web Token.Las rutas protegidas son aquellas donde se quiera: agregar, modificar o eliminar un nuevo producto de la BD.
  
## Estructura del Repositorio

```plaintext
/TRABAJO-INTEGRADOR-BACKEND-DIPLOMATURA-UNTREF
 /json
  - computacion.json
  - usuarios.json
 /src
  - database.js
  - product.js
  - user.js
 .gitignore
 api.http
 app.js
 .env_copy
 README.md

```
### Descripción de Archivos y carpetas

- **/json**: Carpeta que contiene 2 archivos JSON.
- **README.md**: Archivo con la descripción del proyecto.
- **app.js**: Archivo principal de la aplicación donde se define toda la lógica de rutas. 
- **/src**: Carpeta que contiene 3 archivos para la conexion, armar el schema de los productos y de los usuarios.
- **database.js**: Archivo que contiene la conexión a la base de datos MongoDB.
- **product.js**: Archivo que contiene el esquema (schema) del producto.
- **user.js**: Archivo que contiene el esquema (schema) de los usuarios predeterminados.
- **.env_copy**: Archivo que contiene las variables de entorno.
- **.gitignore**: Archivo que indica qué archivos o carpetas no se deben incluir
- **api.http**: Archivo que contiene las rutas de la API.

## Funcionalidades del CRUD
En el archivo api.http se puede realizar las operaciones CRUD y verificar la funcionalidad de la aplicación, para las siguientes operciones:

- **GET /**: Obtener ruta principal.
- **GET /computacion**: Obtener todos los productos.
- **GET /computacion/:id**: Obtener un producto por su ID.
 **GET /computacion/nombre/:nombre**: Obtener un producto por su ID.
- **POST /computacion**: Crear un nuevo producto, ruta protegida.Agregar token de autentificación.
- **PATCH /computacion/:id**: Modificar el precio de un producto.Ruta protegida
- **DELETE /computacion/:id**: Eliminar un producto. Ruta protegida
- **POST /login**: Realizar el Login y obtener token para validar usuario predeterminado y acceder a rutas protegidas.

**IMPORTANTE**
- Realizar el Login y obtener token para validar usuario y acceder a rutas protegidas.
- Agregar token de autentificación en el header de la petición para acceder a rutas protegidas.

## Instrucciones :
***Crear archivo principal de la aplicación :***
- app.js

***Inicializar el proyecto :***
- npm init -y

***Agregar las siguientes dependencias:***

- npm i express mongoose morgan
- npm i jsonwebtoken

***Agregar en los script del archivo package.json:***
 
- "start": "node  -- watch app.js"

***Crear archivo de configuración de variables de entorno:***

- .env

***Crear archivo de conexión a la base de datos :***

- src/database.js

***Crear archivo de esquema de productos y usuarios:***

- src/product.js
-src/user.js

***Crear archivo de rutas:***

- api.http

***Crear el servidor dentro de app.js***

La aplicación se inicializa y agregá la escucha de la conexión en el puerto 3008.

***Ejecutar el proyecto en terminal:***

- npm start
- Abrir en el navegador :
 http://localhost:3008/

## Datos JSON Proporcionados
Se proporciona dentro de la carpeta json dos archivos correspondiente a los datos se los accesorios de computación y de los usuarios registrados. Podrás utilizarla para crear una base de datos con dos colecciones dentro. Una para los accesorios y otra para los usuarios.
- **computacion.json**: Productos de computación, partes y accesorios.
- **usuarios.json**: Usuarios varios registrados.

## Environment Variables
Para correr este proyecto, deberás modificar el archivo .env_copy por .env.
En  la cadena de conexión  MONGODB_URLSTRING , colocar tu usuario y password correspondiente al cluster generado en MongoDB
ejemplo:
MONGODB_URLSTRING='mongodb+srv://(usuario):(contraseña)@cluster0.......>'
En caso de no tener usuario y password, regístrate en:
- https://www.mongodb.com/
- Crear un cluster
- Crear un usuario y contraseña
- Copiar la cadena de conexión y pegarla en el archivo .env

DATABASE_NAME = agregar nombre de la base de datos de MongoDB
Compass.

COLLECTION_NAME = agregar nombre de la colección.

SECRET_KEY= clave secreta para obtener y validar JWT.

PORT= puerto de la aplicación.


## Autor
- https://github.com/sara-villagra

