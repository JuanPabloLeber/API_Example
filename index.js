const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

;(async function () {
        await mongoose.connect(process.env.URL, {
            dbName: process.env.MONGO_DB
        })
        console.log('connected to DB successfully')

        app
            .use(cors('*'))
            .use(morgan('dev'))
            .use(express.json())
            .use('/api', require('./routes'))
        
            .listen(process.env.SERVER_PORT, () => {
                console.log(`Connected to port ${process.env.SERVER_PORT}`)
            })
})()




