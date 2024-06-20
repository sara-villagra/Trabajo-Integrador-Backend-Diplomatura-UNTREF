const express = require('express')
const app = express()
process.loadEnvFile()
const port = process.env.PORT ?? 3000
const morgan = require('morgan')

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Ruta principal
app.get('/', (req, res) => {
 res.send('Bienvenido a la API de Accesorios de Computación !')
})

//Inicializamos el servidor
app.listen(port, () => {
 console.log(`Example app listening on http://localhost:${port}`)
})
