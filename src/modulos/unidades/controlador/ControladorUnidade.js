const knex = require("../../../database")
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async listar(req, res) {
    const resultado = await knex('unidades')

    return res.json(resultado);
  },

  async criar(req, res) {
    const {
      cep,
      rua,
      complemento,
      numero,
      bairro,
      cidade,
      estado,
      capacidade_total,
      capacidade_reduzida,
    } = req.body;

    await knex('unidades').insert({
      id: uuidv4(),
      cep,
      rua,
      complemento,
      numero,
      bairro,
      cidade,
      estado,
      capacidade_total,
      capacidade_reduzida,
    })

    return res.status(201).send()
  }
}