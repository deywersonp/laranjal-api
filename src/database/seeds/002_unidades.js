const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('unidades').del()
    .then(function () {
      // Inserts seed entries
      return knex('unidades').insert([
        {
          id: 1,
          secundario_id: uuidv4(),
          nome_unidade: 'São Paulo 1º andar',
          cep: 1415906,
          rua: 'Rua Bela Cintra',
          numero: 986,
          complemento: '1º andar',
          bairro: 'Consolação',
          cidade: 'São Paulo',
          estado: 'São Paulo',
          capacidade_total: 300,
          capacidade_reduzida: 120,
        },
        {
          id: 2,
          secundario_id: uuidv4(),
          nome_unidade: 'São Paulo 2º andar',
          cep: 1415906,
          rua: 'Rua Bela Cintra',
          numero: 986,
          complemento: '2º andar',
          bairro: 'Consolação',
          cidade: 'São Paulo',
          estado: 'São Paulo',
          capacidade_total: 300,
          capacidade_reduzida: 120,
        },
        {
          id: 3,
          secundario_id: uuidv4(),
          nome_unidade: 'Santos',
          cep: 11065500,
          rua: 'Praça dos Expedicionários',
          numero: 19,
          complemento: '2º andar',
          bairro: 'Gonzaga',
          cidade: 'Santos',
          estado: 'São Paulo',
          capacidade_total: 100,
          capacidade_reduzida: 40,
        }
      ]);
    });
};
