require('dotenv').config()
require('./db/database')

const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')
const MongoDB = require('./db/database')
const router = require('./routes/router')

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`)
})

