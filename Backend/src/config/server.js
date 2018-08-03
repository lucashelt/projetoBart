const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/conversor')

const port = 7000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
})

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())


server.listen(port, function(){
    console.log(`Running on ${port}`)
})

const router = express.Router()

server.use('/api', router)

const conversorSchema = require('../api/conversor/schema')
conversorSchema.register(router, '/conversor')