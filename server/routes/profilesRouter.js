const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getAllMovies()
      .then((moviesArr) => {res.json(moviesArr)})
      .catch((err) => {res.status(500).json({ message: err.message})})
})

router.post('/', (req, res) => {
  const movie = req.body
  db.addAMovie(movie)
    .then((idArr) => {
      const id = idArr[0]
      return db.getMovieById(id)
    })
    .then((movieFromDb) => {
      res.json(movieFromDb)
    })
    .catch((err) => {res.status(500).json({ message: err.message})})
})

module.exports = router