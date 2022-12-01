exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guides')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        { id: 1, name: 'Jeremiah Alfonso', bio: 'hes pretty cool', language: 'English, Albanian', fee: 250, contact_number: 455454544444 , email: 'J.Alf@gmail.com'},
        { id: 2, name: 'Bobby Souffle', bio: 'he showed me a giant hole in the ground', language: 'English, American', fee: 500, contact_number: 455454544444 , email: 'B.Sou@gmail.com' },
        { id: 3, name: 'Noah Arkansas', bio: 'There was lots of animals on his boat', language: 'Latin, English, Space-Elvish', fee: 50, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
      ])
    })
}

