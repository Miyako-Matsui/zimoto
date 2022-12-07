
const connection = require('./connection')

function addLocation(newLocation, db = connection) {
  return db('locations').insert(newLocation)
}

module.exports = {
  addLocation
}