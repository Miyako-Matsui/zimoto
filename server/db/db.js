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
function getAGuide(id, db = connection) {
  return db('guides')
    .join('locations', 'locations.guide_id', 'guides.id')
    .select('*', 'guide_id AS guideId', 'contact_number AS contactNumber')
    .where('guides.id', id)
    .first()
}

module.exports = {
  getGuides,
  getAGuide,
}
