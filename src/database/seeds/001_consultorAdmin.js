const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('consultores').del()
    .then(function () {
      // Inserts seed entries
      return knex('consultores').insert(
        {
          id: uuidv4(),
          nome: 'admin',
          nome_social: 'admin',
          email: 'admin@fcamara.com',
          senha: 'admin',
          admin: true
        },
      );
    });
};
