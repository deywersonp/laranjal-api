const knex = require("../../../database")
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async listar(req, res) {
    const { consultor_id } = req.params;

    const resultado = await knex('agendamentos')
      .select('data_visita', 'espaco_agendado')
      .leftJoin('consultores', 'agendamentos.consultor_id', '=', 'consultores.id')
      .where({ 'consultores.id': consultor_id })

    return res.status(200).json(resultado);
  },

  async criar(req, res) {
    const { consultor_id, unidade_id } = req.headers;
    const { data_visita, espaco_agendado } = req.body;

    const verificaUnidade = await knex('unidades')
      .where({ "id": unidade_id })
      .first();

    if (!verificaUnidade) {
      console.log(verificaUnidade)
      return res.status(400).json({ message: "Unidade não encontrada." })
    }

    await knex('agendamentos').insert({
      id: uuidv4(),
      consultor_id,
      unidade_id,
      data_visita,
      espaco_agendado
    })

    return res.status(201).json()
  }
}