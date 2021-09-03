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

    const unidadeExiste = await knex('unidades')
      .where({
        rua: `${rua}`,
        bairro: `${bairro}`,
        cidade: `${cidade}`
      })

    if (unidadeExiste.length > 0) {
      console.log(unidadeExiste)
      return res.status(400).json({ message: "Está unidade já está cadastrada!" })
    }

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
  },

  async atualizar(req, res) {
    const { id } = req.params;

    try {
      const unidade = await knex('unidades').where({ id })
      if (!unidade.length > 0) {
        return res.status(400).json({ message: "Não foi encontrada nenhuma unidade com este identificador." })
      }
    } catch (err) {
      return res.status(400).json({ message: "Não foi encontrada nenhuma unidade com este identificador." })
    }

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

    await knex('unidades')
      .where({ id })
      .update({
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

    return res.status(204).send()
  },

  async apagar(req, res) {
    const { id } = req.params;

    try {
      const unidade = await knex('unidades').where({ id })
      if (!unidade.length > 0) {
        return res.status(400).json({ message: "Não foi encontrada nenhuma unidade com este identificador." })
      }
    } catch (err) {
      return res.status(400).json({ message: "Não foi encontrada nenhuma unidade com este identificador." })
    }

    await knex('unidades')
      .where({ id })
      .del()

    return res.status(204).send();
  }
}