exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { id: 1, country: 'New Zealand', city: 'Wellington', guide_id: '1'},
        { id: 2, country: 'America', city: 'Rancho Cucamonga', guide_id: '2' },
        { id: 3, country: 'Australia', city: 'Melbourne', guide_id: '3'},
      ])
    })
}


