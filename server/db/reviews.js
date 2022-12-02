const connection = require('./connection')

function addReview(review, db = connection) {
  return db('reviews').insert(review)
}

function editReview(id, reviews, db = connection) {
  return db('reviews')
    .where({ id: `${id}` })
    .update(reviews)
}

function deleteReview(id, db = connection) {
  return db('reviews').where({ id: id }).del()
}

function getAllReviews(id, db = connection) {
  return db('reviews').select().where({ id: id })
}
// function getAllReviews(db = connection) {
//   return db('reviews').select()
// }
module.exports = {
  addReview,
  editReview,
  deleteReview,
  getAllReviews,
}
