
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Jordy Geller',
        email: 'jordy@gmail.com',
        hashed_password: 'password123',
        avatar: 'https://yt3.ggpht.com/-r42Dls9iGXM/AAAAAAAAAAI/AAAAAAAAAAA/s6nR37oFD_0/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg'
        }
      ]);
    });
};
