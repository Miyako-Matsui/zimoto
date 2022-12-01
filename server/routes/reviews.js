const express = require('express')

const db = require('../db/reviews')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllReviews()
    .then((results) => {
      res.json({ reviews: results.map((review) => review) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
