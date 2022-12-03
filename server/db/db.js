const { default: knex } = require('knex')
const connection = require('./connection')

function guideJoinTable(db = connection){
  return db('guides')
    .select('*', 'guides.id AS guide_id', 'contact_number AS contactNumber')
    .leftJoin('reviews', 'guides.id', 'reviews.guide_id')
    .leftJoin('locations', 'locations.guide_id', 'guides.id')
    .avg('rating AS averageRating')
    .groupBy('guides.id')
}

function getGuides(db = connection) {
  return db('guides')
    .leftJoin('reviews', 'guides.id', 'reviews.guide_id')
    .select('*', 'guides.id AS guide_id', 'contact_number AS contactNumber')
    .avg('rating AS averageRating')
    .groupBy('guide_id')
}

function getFilteredGuides(filters, db = connection) {
  return guideJoinTable()
  // return db.select()
  //   .from(getGuides())
  //   .join('locations', 'locations.guide_id', 'guides.id')
  //   .where('averageRating', '>', 3)
}

module.exports = {
  getGuides,
  getFilteredGuides
}
