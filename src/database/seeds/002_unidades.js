const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('unidades').del()
    .then(function () {
      // Inserts seed entries
      return knex('unidades').insert([
        {
          id: uuidv4(),
          cep: 11065500,
          rua: 'Praça dos Expedicionários',
          numero: 19,
          complemento: '2º andar',
          bairro: 'Gonzaga',
          cidade: 'Santos',
          estado: 'São Paulo',
          capacidade_total: 100,
          capacidade_reduzida: 40,
        },
        {
          id: uuidv4(),
          cep: 1415906,
          rua: 'Rua Bela Cintra',
          numero: 986,
          complemento: '2º andar',
          bairro: 'Consolação',
          cidade: 'São Paulo',
          estado: 'São Paulo',
          capacidade_total: 600,
          capacidade_reduzida: 240,
        },
      ]);
    });
};
