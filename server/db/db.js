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
  const filterObjs = [
    {
      key: 'country',
      operator: '=',
      value: filters.country
    },
    {
      key: 'city',
      operator: '=',
      value: filters.city
    },
    {
      key: 'averageRating',
      operator: '<',
      value: filters.maxRating
    },
    {
      key: 'averageRating',
      operator: '>',
      value: filters.minRating
    },
    {
      key: 'fee',
      operator: '<',
      value: filters.maxFee
    },
    {
      key: 'fee',
      operator: '>',
      value: filters.minFee
    },
  ]
  const query = db.select('id', 'name', 'averageRating').from(guideJoinTable())
  // if (filters.language) {
  //   query = query.where('language', 'like', '%' + filters.language + '%')
  // }
  filterObjs.forEach(filter => {
    query = query.where(filter.key, filter.operator, filter.value)
  })
  return query
}

module.exports = {
  getGuides,
  getFilteredGuides
}
