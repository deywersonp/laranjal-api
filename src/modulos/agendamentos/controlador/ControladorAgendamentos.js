const knex = require("../../../database")
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async listar(req, res) {
    const { id } = req.params;

    const resultado = await knex('agendamentos')
      .select('data_visita', 'espaco_agendado')
      .leftJoin('consultores', 'agendamentos.consultor_id', '=', 'consultores.id')
      .where({ 'consultores.id': id })


    return res.json(resultado);
  }
}