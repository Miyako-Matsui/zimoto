exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guides')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        { id: 1, name: 'Jeremiah Alfonso', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mi non tortor ultrices, et condimentum magna dignissim. Donec ipsum neque, vehicula sed lobortis ut, fringilla in sapien. Pellentesque sapien metus, ullamcorper quis lectus sit amet, molestie rhoncus lectus. Praesent blandit non odio eget euismod. Pellentesque elit urna, volutpat a velit in, iaculis eleifend libero. Aliquam mollis mi sed felis consectetur fermentum. Curabitur viverra eros sed dolor mattis, non hendrerit quam tempor. Praesent non ultricies magna, sed vehicula metus. Phasellus eros dui, facilisis at ultricies eu, rhoncus non enim. Donec a erat purus.', language: 'English, Albanian', fee: 250, contact_number: 455454544444 , email: 'J.Alf@gmail.com'},

        { id: 2, name: 'Bobby Souffle', bio: 'I can show you a giant hole in the ground', language: 'English, American', fee: 500, contact_number: 455454544444 , email: 'B.Sou@gmail.com' },
        { id: 3, name: 'Noah Arkansas', bio: 'There was lots of animals on my boat', language: 'Latin, English, Space-Elvish', fee: 50, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
        { id: 4, name: 'James Bond', bio: 'You can call me 007', language: 'Latin, English, Space-Elvish', fee: 500, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
        { id: 5, name: 'Lara Croft', bio: 'Let\'s raid some tombs', language: 'Latin, English, Space-Elvish', fee: 520, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
        { id: 6, name: 'Aladin', bio: 'I can show you the world', language: 'Latin, English, Space-Elvish', fee: 20, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
        { id: 7, name: 'Joe', bio: 'Wanna see my basement?', language: 'Latin, English, Space-Elvish', fee: 0, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
        { id: 8, name: 'Lisa', bio: 'This is definitely a bio', language: 'Latin, English, Space-Elvish', fee: 50, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
        { id: 9, name: 'Lily', bio: 'I\'m interesting', language: 'Latin, English, Space-Elvish', fee: 50, contact_number: 455454544444 , email: 'N.Ark@gmail.com' },
      ])
    })
}

