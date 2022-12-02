const connection = require('./connection')

function getAGuide(id, db = connection) {
  return db('guides')
    .join('locations', 'locations.guide_id', 'guides.id')
    .select('*', 'guide_id AS guideId', 'contact_number AS contactNumber')
    .where('guides.id', id)
    .first()
}

function addAGuide(newGuide, db = connection) {
  return db('guides').insert(newGuide)
}

module.exports = {
  getAGuide,
  addAGuide,
}
