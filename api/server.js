const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/auth-router.js');
const condRouter = require('../conditions/condition-router.js')
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/',(req,res) => {
    res.status(200).json({"api":"up"})
})

server.use('/auth',authRouter);
server.use('/conditions',condRouter);

module.exports = server