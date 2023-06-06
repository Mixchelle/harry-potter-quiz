'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Harry Potter',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
                  // senha: secret_admin
        birthdate: new Date(1980, 6, 31),
        house: 'Gryffindor',
        avatar: 'harry_potter_avatar.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Hermione Granger',
        email: 'hermione@example.com',
        password: 'hashed_password_here',
        birthdate: new Date(1979, 8, 19),
        house: 'Gryffindor',
        avatar: 'hermione_granger_avatar.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};

