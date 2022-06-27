const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    userName: String,
    namaLengkap: String,
    email: String,
    password: String
})

module.exports = mongoose.model('user', userModel)