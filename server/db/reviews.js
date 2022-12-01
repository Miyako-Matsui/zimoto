const connection = require('./connection')

function getAllReviews(db = connection) {
  return db('reviews').select()
}

module.exports = {
  getAllReviews,
}
