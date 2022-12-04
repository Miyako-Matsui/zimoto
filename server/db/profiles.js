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

function deleteAGuide(id, db = connection) {
  return db('guides').where('id', id).del()
}

function updateAGuide(id, value, db = connection) {
  return db('guides').update(value).where('id', id)
}

module.exports = {
  getAGuide,
  addAGuide,
  deleteAGuide,
  updateAGuide
}
