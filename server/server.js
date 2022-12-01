const express = require('express')
const path = require('path')

const guideRoutes = require('./routes/guides')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guides', guideRoutes)

module.exports = server
