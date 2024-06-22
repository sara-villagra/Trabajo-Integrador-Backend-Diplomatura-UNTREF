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
//agregar un nuevo producto:
app.post('/computacion/', (req, res) => {
 const componente = new Accesorio(req.body)
 console.log(componente)
 if (!componente) {
  res.status(400).json({ message: 'Debe agregar un accesorio' })
 } else {
  componente
   .save()
   .then((componente) => {
    res.status(200).json({ message: 'Posteo hecho con exito', componente })
   })
   .catch((error) => {
    console.error('Error al crear el componente: ', error)
    res.status(500).send('Error al crear el componente')
   })
 }
})
//Modificar el precio de un producto:
app.patch('/computacion/:id', (req, res) => {
 const { id } = req.params
 Accesorio.findByIdAndUpdate(id, req.body, {
  new: true
 })
  .then((componente) => {
   if (componente) {
    res.status(200).json(componente)
   } else {
    res.status(404).send('El componente no existe')
   }
  })
  .catch((error) => {
   console.error('Error al actualizar el componente: ', error)
   res.status(500).send('Error al actualizar el componente')
  })
})
//Borrar un producto por si id
app.delete('/computacion/:id', (req, res) => {
 const { id } = req.params
 Accesorio.findByIdAndDelete(id)
  .then((componente) => {
   if (componente) {
    res.status(200).json(componente)
   } else {
    res.status(404).send('El componente no existe')
   }
  })
  .catch((error) => {
   console.error('Error al borrar el componente: ', error)
   res.status(500).send('Error al borrar el componente')
  })
})
//Middleware para rutas no encontradas 404
app.use((req, res) => {
 res.status(404).send('<h1>404 página no encontrada, =(</h1>')
})

//Inicializamos el servidor
app.listen(port, () => {
 console.log(`Example app listening on http://localhost:${port}`)
})
