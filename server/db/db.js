const connection = require('./connection')

function getGuides(db = connection) {
  // return db('guides')
  //   .select('*', 'contact_number AS contactNumber')
  return db('reviews')
    .join('guides', 'guides.id', 'reviews.guide_id')
    .select('*', 'guides.id AS guide_id', 'contact_number AS contactNumber')
    .avg('rating AS averageRating')
    .groupBy('guide_id')
}

module.exports = {
  getGuides,
}
