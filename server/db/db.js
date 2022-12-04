const { default: knex } = require('knex')
const connection = require('./connection')

function guideJoinTable(db = connection){
  return db('guides')
    .select(
      'guides.id AS id',
      'name',
      'bio',
      'language',
      'fee',
      'contact_number AS contactNumber',
      'email', 
      'country',
      'city',
      )
    .leftJoin('reviews', 'guides.id', 'reviews.guide_id')
    .leftJoin('locations', 'locations.guide_id', 'guides.id')
    .avg('rating AS averageRating')
    .groupBy('guides.id')
}

function getGuides(db = connection) {
  return db.select(
    'id',
    'name',
    'fee',
    'averageRating'
  )
    .from(guideJoinTable())
    .limit(20)
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
      operator: '<=',
      value: Number(filters.maxRating)
    },
    {
      key: 'averageRating',
      operator: '>=',
      value: Number(filters.minRating)
    },
    {
      key: 'fee',
      operator: '<=',
      value: Number(filters.maxFee)
    },
    {
      key: 'fee',
      operator: '>=',
      value: Number(filters.minFee)
    },
  ]

  return db.select().from(guideJoinTable())
    .modify(queryBuilder => {
      filterObjs.forEach(filter => {
        if (filter.value) {
          queryBuilder.where(filter.key, filter.operator, filter.value)
        }
      })
    })
}

module.exports = {
  getGuides,
  getFilteredGuides
}
