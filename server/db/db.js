const connection = require('./connection')

function getGuides(db = connection) {
  return db('guides').select()
}
function getAGuide (id, db = connection) {
  return db('guides')
  .join('guides', 'locations.guide_id', 'guides.id')
  .select('*', 'guide_id AS guideId')
  .where('guides.id', id)
  .first()
}

module.exports = {
  getGuides,
  getAGuide
}
