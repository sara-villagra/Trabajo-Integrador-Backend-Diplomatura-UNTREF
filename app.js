const express = require('express')
const app = express()
const connectDB = require('./src/database')
process.loadEnvFile()
const port = process.env.PORT ?? 3000
const morgan = require('morgan')
const Accesorio = require('./src/product')
connectDB()
//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Ruta principal
app.get('/', (req, res) => {
 res.send('Bienvenido a la API de Accesorios de Computación !')
})
//obtener todos los accesorios

app.get('/computacion', (req, res) => {
 Accesorio.find()
  .then((accesorios) => {
   res.json(accesorios)
  })
  .catch((error) => {
   //console.error(`error al cargar los accesorios:`, error)
   res.status(500).send(`Error al mostrar los accesorios,${error}`)
  })
})
//obtener accesorios de computación por su id
app.get('/computacion/:id', (req, res) => {
 Accesorio.findById(req.params.id)
  .then((accesorio) => {
   res.status(200).json(accesorio)
  })
  .catch((error) => {
   res.status(500).send(`Error al mostrar los accesorios,${error}`)
  })
})
//Filtrar accesorios por su nombre (busqueda parcial)

app.get('/computacion/nombre/:nombre', (req, res) => {
 const { nombre } = req.params
 if (!nombre) {
  res.status(400).send('Debe ingresar un nombre')
 } else {
  Accesorio.find({ nombre: { $regex: `^${nombre}`, $options: 'i' } })
   .then((accesorio) => {
    res.status(200).json(accesorio)
   })
   .catch((error) => {
    res.status(500).send(`Error al mostrar los accesorios,${error}`)
   })
 }
})
//Agregar un nuevo producto

//Middleware para rutas no encontradas 404
app.use((req, res) => {
 res.status(404).send('<h1>404 página no encontrada, =(</h1>')
})

//Inicializamos el servidor
app.listen(port, () => {
 console.log(`Example app listening on http://localhost:${port}`)
})
