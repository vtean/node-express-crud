const express = require('express')
require('dotenv').config()
const app = express()
const router = require("./api/routes/index");

app.use(express.json())
app.use('/', router);

app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})

require('./database').init()
