const connection = require('./connection')

function addReview(review, db = connection) {
  return db('reviews')
    .insert(review)
}

function editReview(id, reviews, db = connection) {
  return db('reviews')
    .where({ id: `${id}` })
    .update(reviews)
}

function deleteReview(id, db = connection) {
  return db('reviews')
  .where({ id: id })
  .del()
}

module.exports = {
  addReview,
  editReview,
  deleteReview,
}
