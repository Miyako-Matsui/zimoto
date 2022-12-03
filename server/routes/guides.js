const express = require('express')

const db = require('../db/db.js')

const router = express.Router()

//get all guides
router.get('/', (req, res) => {
  db.getGuides()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message})
    })
})

router.get('/filter', (req, res) => {
  const query = req.query
  console.log(query)
  db.getFilteredGuides()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message})
    })
})

module.exports = router
