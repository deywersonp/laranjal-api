const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('consultores').del()
    .then(function () {
      // Inserts seed entries
      return knex('consultores').insert(
        {
          secundario_id: uuidv4(),
          apelido: 'admin',
          email: 'admin@fcamara.com.br',
          senha: 'admin',
          admin: true
        },
      );
    });
};
