const knex = require("../../../database")
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async listar(req, res) {
    const { consultor_id } = req.params;

    const resultado = await knex('agendamentos')
      .select('agendamentos.data_visita',
        'agendamentos.espaco_agendado',
        'unidades.bairro',
        'unidades.cidade')
      .leftJoin('consultores', 'agendamentos.consultor_id', '=', 'consultores.id')
      .rightJoin('unidades', 'agendamentos.unidade_id', '=', 'unidades.id')
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
  },
  async apagar(req, res) {
    const { agendamento_id } = req.params;

    await knex('agendamentos')
      .where({ id: agendamento_id })
      .del();

    return res.status(204).send();
  }
}