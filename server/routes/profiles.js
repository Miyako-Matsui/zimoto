const express = require('express')
const router = express.Router()

const db = require('../db/profiles')

// POST /api/v1/profiles/

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

// DELETE /api/v1/profiles/

router.delete('/:id', (req, res) => {
  const { id } = req.params

  db.deleteAGuide(id)
  .then(numOfDeletes => {
    res.json({deletes: numOfDeletes})
  })
  .catch(err => {
    return console.error(err.message)
  })
})

module.exports = router
