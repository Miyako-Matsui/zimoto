exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, rating: 7, title: 'Alfonso pronto', text: 'Very fast, lovely and fun. A little too fast but it\'s fine.', guide_id: 1, },
        { id: 2, rating: 3, title: 'Uhhhhhhh', text: 'This man loves America a little too much. Quite loud and did not like his attitude towards me and my family', guide_id: 2, },
        { id: 3, rating: 10, title: 'hes pretty cool', text: 'There was a boat, there was alot of animals. I love animals.', guide_id: 3, },
      ])
    })
}
