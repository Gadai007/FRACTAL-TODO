const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 5000
require('dotenv').config()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server connected on ${PORT}`)
        })
    })


