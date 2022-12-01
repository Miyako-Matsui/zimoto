const express = require('express')
const path = require('path')

const guideRoutes = require('./routes/guides')
const reviewsRoutes = require('./routes/reviews')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/reviews', reviewRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

server.use('/api/v1/guides', guideRoutes)

server.use('/api/v1/reviews', reviewsRoutes)

module.exports = server
