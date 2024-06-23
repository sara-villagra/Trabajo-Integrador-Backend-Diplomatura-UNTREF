const mongoose = require('mongoose')

const accesoriosSchema = new mongoose.Schema({
 //title: String,

 codigo: Number,
 nombre: String,
 precio: Number,
 categoria: String
})
const Accesorio = mongoose.model('accesorio', accesoriosSchema)

module.exports = Accesorio
