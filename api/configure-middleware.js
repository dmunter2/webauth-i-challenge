const helmet = require('helmet')
const cors = require('cors')
const express = require('express')

module.exports = server => {
    server.use(helmet());
    server.use(express.json())
    server.use(cors())

}

