const express = require('express')
const router = express.Router()

const db = require('../db/profiles')

router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getAGuide(id)
    .then((guideArr) => {
      res.json(guideArr)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/add', (req, res) => {
  db.addAGuide(req.body)
    .then((response) => {
      res.json(response) // route will respond with this it's just a number given by the insert in db
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
