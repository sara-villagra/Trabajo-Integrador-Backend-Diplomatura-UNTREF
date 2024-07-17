const express = require('express')
const app = express()
const connectDB = require('./src/database')
process.loadEnvFile()
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY
const port = process.env.PORT ?? 3000
const morgan = require('morgan')
const Accesorio = require('./src/product')
const User = require('./src/user')
connectDB()

app.disable('x-powered-by')
//Middleware
app.use(express.json())
app.use(morgan('dev'))

// Middleware para verificar  token JWT
const verifyToken = (req, res, next) => {
 const token = req.headers['authorization']
 if (!token)
  return res.status(401).json({
   error:
    'Usuario no autentificado, deberá loguearse y obtener token de seguridad para continuar'
  })
 // Verificación del token
 jwt.verify(token, secretKey, (err, decoded) => {
  err
   ? res.status(401).json({ error: 'Invalid token' })
   : (req.decoded = decoded)
  next()
 })
}
//Ruta principal
app.get('/', (req, res) => {
 res.send('Bienvenido a la API de Accesorios de Computación!')
})

//obtener todos los accesorios o por genero
app.get('/computacion', (req, res) => {
 const { categoria } = req.query
 const query = !categoria
  ? {}
  : { categoria: { $regex: categoria, $options: 'i' } }
 Accesorio.find(query)
  .then((accesorios) => {
   if (!accesorios) {
    return res.status(404).send('No se encontraron accesorios')
   } else {
    res.json(accesorios)
   }
  })
  .catch((error) => {
   res.status(500).send(`Error al mostrar los accesorios,${error}`)
  })
 //  Accesorio.find()
 //   .then((accesorios) => {
 //    if (accesorios) {
 //     res.json(accesorios)
 //    } else {
 //     res.status(404).send('No se encontraron accesorios')
 //    }
 //   })
 //   .catch((error) => {
 //    res.status(500).send(`Error al mostrar los accesorios,${error}`)
 //   })
})
//obtener accesorios de computación por su id
app.get('/computacion/:id', (req, res) => {
 Accesorio.findById(req.params.id)
  .then((accesorio) => {
   if (!accesorio) {
    return res
     .status(404)
     .send(`No se encontró el accesorio con ese id: ${accesorio}`)
   }
   res.json(accesorio)
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
    res.json(accesorio)
   })
   .catch((error) => {
    res.status(500).send(`Error al mostrar los accesorios,${error}`)
   })
 }
})
// Login de usuario donde se genera el JWT de seguridad
//para rutas seguras
app.post('/login', (req, res) => {
 const { username, password } = req.body
 //Autenticacion del usuario
 User.find({
  username: { $regex: username, $options: 'i' },
  password: { $regex: password, $options: 'i' }
 })
  .then((user) => {
   //console.log(user)
   if (user) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' })
    return res.json({
     message:
      'Guarda el siguiente token. Será solicitado para rutas protegidas',
     token
    })
   } else {
    res.status(401).send('Usuario o contraseña incorrectos')
   }
  })
  .catch((error) => {
   res.status(500).send(`Error al autenticar el usuario, ${error}`)
  })
})

//agregar un nuevo producto:
app.post('/computacion/', verifyToken, (req, res) => {
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
    //console.error('Error al crear el componente: ', error)
    res.status(500).send(`Error al crear el componente, ${error}`)
   })
 }
})
//Modificar el precio de un producto:
app.patch('/computacion/:id', verifyToken, (req, res) => {
 const { id } = req.params
 Accesorio.findByIdAndUpdate(id, req.body, {
  new: true
 })
  .then((componente) => {
   if (componente) {
    res.json(componente)
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
app.delete('/computacion/:id', verifyToken, (req, res) => {
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
   res.status(500).send(`Error al borrar el componente, ${error}`)
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
