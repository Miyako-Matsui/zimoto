const  {default: knex}  = require('knex')
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
      )
    .leftJoin('reviews', 'guides.id', 'reviews.guide_id')
    .leftJoin('locations', 'locations.guide_id', 'guides.id')
    .select(db.raw('group_concat(distinct(locations.city)) as cities'))
    .avg('rating AS averageRating')
    .groupBy('guides.id')
}

function getGuides(db = connection) {
  return db.select(
    'id',
    'name',
    'fee',
    'averageRating',
    'cities'
  )
    .from(guideJoinTable()) 
    .as('joinGuideTable')
    .limit(20)
}

function getFilteredGuides(filters, db = connection) {
  const filterObjs = [
    {
      key: 'country',
      operator: 'like',
      value: filters.country
    },
    {
      key: 'cities',
      operator: 'like',
      value: filters.city
    },
    {
      key: 'language',
      operator: 'like',
      value: filters.language
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
          if (filter.operator === 'like') {
            queryBuilder.where(filter.key, 'like', '%' + filter.value + '%')
          } else {
            queryBuilder.where(filter.key, filter.operator, filter.value)
          }
        }
      })
    })
}

module.exports = {
  getGuides,
  getFilteredGuides
}
