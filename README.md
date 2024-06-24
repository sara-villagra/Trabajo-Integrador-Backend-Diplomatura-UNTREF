# Proyecto Integrador: CRUD con Node.js y MongoDB



## Descripción del Proyecto

En este proyecto, desarrolla una aplicación basada en Node.js, express, MongoDB, que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos correspondiente a accesorios de computación y  usuarios registrados con control de errores.
Se agregó librerias como dependencias para  optimizar su funcionalidad, como Mongoose, Morgan y JWT.  
Se implementó autenticación y autorización para que solo los usuarios autenticados puedan realizar operaciones sobre rutas protegidas.

## Datos JSON Proporcionados
Se agrego dentro de la carpeta json dos archivos correspondiente a los datos se los accesorios de computación y de los usuarios registrados. Podrás utilizarla para crear la base de datos con dos colecciones dentro.Una para los accesorios y otra para los usuarios.
- **computacion.json**: Productos de computación, partes y accesorios.
- **usuario.json**: Usuarios varios registrados.

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
 .env_copy
 .gitignore
 api.http
 README.md
 app.js

```
### Descripción de Archivos y carpetas

- **/json**: Carpeta que contiene 2 archivos JSON.
- **README.md**: Archivo con la descripción del proyecto.
- **app.js**: Archivo principal de la aplicación Node.js donde se define toda la lógica de rutas 
- **/src**: Carpeta que contiene 3 archivos para la conexion y para armar el schema de los productos y de los usuarios.
- **database.js**: Archivo que contiene la conexión a la base de datos MongoDB.
- **product.js**: Archivo que contiene el esquema (schema) del producto.
- **user.js**: Archivo que contiene el esquema (schema) de los usuarios.
- **.env_copy**: Archivo que contiene las variables de entorno.
- **.gitignore**: Archivo que indica qué archivos o carpetas no se deben incluir
- **api.http**: Archivo que contiene las rutas de la API.

## Environment Variables
Para correr este proyecto, deberás modificar el archivo .env_copy por .env.
En  la cadena de conexión  MONGODB_URLSTRING , colocar tu usuario y password correspondiente al cluster generado en MongoDB
ejemplo:
MONGODB_URLSTRING='mongodb+srv://(usuario):(contraseña)@cluster0.......>'
En caso de no tener usuario y password, regístrate en:
- https://www.mongodb.com/
- Crear un cluster
- Crear un usuario y contraseña

DATABASE_NAME = agregar nombre de la base de datos de MongoDB Compass.
COLLECTION_NAME = agregar nombre de la colección.
SECRET_KEY= clave secreta para obtener y validar JWT.
PORT= puerto de la aplicación.

## Funcionalidades del CRUD
En el archivo api.http se puede realizar las operaciones CRUD y verificar la funcionalidad. Para:

- **GET /**: Obtener ruta principal.
- **GET /computacion**: Obtener todos los productos.
- **GET /computacion/:id**: Obtener un producto por su ID.
 **GET /computacion/nombre/:nombre**: Obtener un producto por su ID.
- **POST /computacion**: Crear un nuevo producto, ruta protegida.Agregar token de autentificación.
- **PATCH /computacion/:id**: Modificar el precio de un producto.Ruta protegida
- **DELETE /computacion/:id**: Eliminar un producto. Ruta protegida
- **POST /login**: Realizar el Login y obtener token para validar usuario y acceder a rutas protegidas.

## Instrucciones :
inicializar el proyecto :
- npm init -y
Agregar las siguientes dependencias:
- npm i express mongoose morgan
- npm i jsonwebtoken
Agregar en los script de archivo package.json
- "start": "node  -- watch app.js"
Ejecutar el proyecto en terminal
- npm start
Abrir en el navegador :
- http://localhost:3008/

## Autor
- https://github.com/sara-villagra

