const userModel = require('../model/userModel')
const bCrypt = require('bcrypt')
const requestResponse = require('../config/response')

// Registrasi
exports.registrasiUser = (data) => 
new Promise(async (resolve, reject) => {
  const salt = bCrypt.genSaltSync(10)
  const encript = bCrypt.hashSync(data.password, salt)
  Object.assign(data, {
    password: encript
  })
  userModel.create(data)
  .then(() => {
    console.log('Berhasil')
    resolve(requestResponse.sukses(data))
  }).catch((err) => {
    reject(requestResponse.kesalahan)
  })
})

// login
exports.loginUser = (data) =>
new Promise(async (resolve, reject) => {
  userModel.findOne({
    userName: data.userName
  }).then(async (dataUser) => {
    if (dataUser) {
      if (await bCrypt.compare(data.password, dataUser.password)) {
        resolve({
          status: true,
          msg: dataUser
        })
      } else {
        reject({
          status: false,
          msg: 'password anda salah'
        })
      }
    } else {
      reject({
        status: false,
        msg: 'username tidak terdaftar'
      })
    }
  }).catch((err) => {
    reject({
      status: false,
      msg: 'terjadi kesalahan pada server'
    })
  })
})

// Read
exports.getDataUser = (data) =>
new Promise(async (resolve, reject) => {
    userModel.findOne({
        userName: data.userName
    }).then(async (dataUser) => {
        if (dataUser) {
            await userModel.find(data)
            resolve({
                status: true,
                msg: "berhasil Tampilkan data",
                data: dataUser
            })
        } else {
            reject({
                status: false,
                msg: "Gagal"
            })
        }
    }).catch((err) => {
        reject({
            status: true,
            msg: "Gagal Tampilkan data"
        })
    })
})
