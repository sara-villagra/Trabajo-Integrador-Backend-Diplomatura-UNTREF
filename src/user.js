const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
 //title: String,

 id: Number,
 username: String,
 email: String,
 password: String
})
const User = mongoose.model('user', dataSchema)
module.exports = User
