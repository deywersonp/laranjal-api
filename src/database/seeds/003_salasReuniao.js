const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('salas_reuniao').del()
    .then(function () {
      // Inserts seed entries
      return knex('salas_reuniao').insert([
        {
          secundario_id: uuidv4(),
          unidade_id: 1,
          nome: 'Laranja Lima',
          capacidade_total_pessoas: 12,
          recursos_disponiveis: ['Datashow', 'Isolamento Acústico']
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 1,
          nome: 'Laranja Pêra',
          capacidade_total_pessoas: 8,
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 1,
          nome: 'Laranja Bahia',
          capacidade_total_pessoas: 20,
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 1,
          nome: 'Laranja Barão',
          capacidade_total_pessoas: 30,
          recursos_disponiveis: ['Datashow']
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 3,
          nome: 'Laranja Vermelha',
          capacidade_total_pessoas: 12,
          recursos_disponiveis: ['Datashow', 'Isolamento Acústico']
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 3,
          nome: 'Laranja da Terra',
          capacidade_total_pessoas: 15,
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 3,
          nome: 'Laranja Seleta',
          capacidade_total_pessoas: 20,
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 3,
          nome: 'Toranja',
          capacidade_total_pessoas: 25,
          recursos_disponiveis: ['Datashow']
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 3,
          nome: 'Laranja Lima-da-persia',
          capacidade_total_pessoas: 18,
        },
        {
          secundario_id: uuidv4(),
          unidade_id: 3,
          nome: 'Laranja Japonesa',
          capacidade_total_pessoas: 16,
          recursos_disponiveis: ['Datashow']
        }
      ]);
    });
};
