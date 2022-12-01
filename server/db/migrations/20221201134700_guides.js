exports.up = function (knex) {
  return knex.schema.createTable('guides', (table) => {
    table.increments('id')
    table.string('name')
    table.string('bio')
    table.string('language')
    table.integer('fee')
    table.integer('contact_number')
    table.string('email')


  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('guides')
}
