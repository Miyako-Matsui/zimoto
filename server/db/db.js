const connection = require('./connection')

function getGuides(db = connection) {
  return db('guides').select()
}

module.exports = {
  getGuides,
}
