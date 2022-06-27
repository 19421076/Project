const router = require('express').Router()
const userController = require('../controller/userController')

// create
router.post("/register", (req, res) => {
    userController.registrasiUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Login
router.post('/login', (req, res) => {
  userController.loginUser(req.body)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})
// Read
router.get('/tampilkanData', (req, res) => {
    userController.getDataUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Delete
router.delete('/HapusData', (req, res) => {
    userController.deleteDataUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Update
router.patch('/Updatedata', (req, res) => {
    userController.updateDataUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router