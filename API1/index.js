const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const DBConfig = require('./config/userConfig')
const bodyParser = require('body-parser')

app.use(cors())

mongoose.connect(DBConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connect Database")
}).catch((err) => {
    console.log(err)
})

app.use(bodyParser.json({
  extended: true,
  limit: '20mb'
}))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}))

app.use('/users', require('./routes/userRoutes'))

app.listen(port, () => {
    console.log("Terhubung ke port " + port )
})
