const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const actions = require('./actions')

const server = express()

server.use(bodyParser.json())
server.use(morgan('combined'))
server.post(
    '/fullfillment', actions
)
server.get('/', (req, res) => res.json("ok"))

const port = process.env.PORT || 5000;
server.listen(port, '0.0.0.0', () => console.log(`server listening on port ${port}`))