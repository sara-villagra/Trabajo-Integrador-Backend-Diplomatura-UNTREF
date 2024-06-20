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

app.get('/computacion', async (req, res) => {
 const accesorios = await Accesorio.find()
 res.json(accesorios)
})
//obtener un accesorio

//Inicializamos el servidor
app.listen(port, () => {
 console.log(`Example app listening on http://localhost:${port}`)
})
