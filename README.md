# Proyecto Integrador: CRUD con Node.js y MongoDB
**SARA VILLAGRA**
## Descripción del Proyecto

En este proyecto, desarrollarás una aplicación basada en Node.js y MongoDB que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos. La base de datos MongoDB deberá estar generada en el clúster de mongodb.com y tu aplicación Node.js se conectará a ella.

Podrás usar alguno de los datasets JSON proporcionados, o crear uno propio que contenga entre 20 y 30 productos, distribuidos en varias categorías.

## Datasets Proporcionados

- **computacion.json**: Productos de computación, partes, accesorios y repuestos.
- **usuario.json**: usuarios varios.


## Funcionalidades del CRUD

1. **Obtener todos los productos**
   - Endpoint para leer todos los productos de la colección.
   - Control de errores para manejar la indisponibilidad de la base de datos.

2. **Obtener un producto**
   - Endpoint para obtener un producto por su ID.
   - Control de errores para manejar casos en que el producto no se encuentre o la base de datos no esté disponible.

3. **Filtrar productos**
   - Endpoint para filtrar productos por nombre (búsqueda parcial).
   - Control de errores para manejar coincidencias no encontradas o problemas de conexión.

4. **Agregar un nuevo producto**
   - Endpoint para agregar un nuevo producto.
   - Validación y control de errores.
   - Generación de un código numérico para el nuevo producto.

5. **Modificar el precio de un producto**
   - Endpoint para cambiar el precio de un producto usando PATCH.
   - Control de errores para manejar problemas durante la actualización.
     
6. **Borrar un producto**
   - Endpoint para borrar un producto usando DELETE.
   - Control de errores para manejar problemas durante el borrado.

7. **Control de errores**
   - Manejo de errores en la estructura de las solicitudes y respuestas.
   - Respuesta adecuada con mensajes y códigos de error específicos.
   - Control de acceso a rutas no existentes con respuestas apropiadas.





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
 README.md
 app.js

```

### Descripción de Archivos

- **/json**: Carpeta que contiene 2 archivos JSON.
- **/README.md**: Archivo con la descripción del proyecto.
- **/app.js**: Archivo principal de la aplicación Node.js donde se define toda la lógica de rutas y la conexión a la base de datos.
- **/database.js**: Archivo para configurar la conexión a la base de datos MongoDB.
- **/product.js**: Archivo que contiene el esquema (schema) del producto utilizando Mongoose.

## Instrucciones :


## Conclusión

Este proyecto te permitirá aplicar tus conocimientos en desarrollo backend con Node.js y MongoDB, implementando un CRUD completo con control de errores y buenas prácticas. ¡
