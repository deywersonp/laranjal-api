const knex = require("../database")

async function VerificaExistencia(req, res, next) {
  const { id } = req.params;

  try {
    const unidade = await knex('unidades').where({ id })
    if (!unidade.length > 0) {
      return res.status(400).json({ message: "Não foi encontrada nenhuma unidade com este identificador." })
    }
  } catch (err) {
    return res.status(400).json({ message: "Não foi encontrada nenhuma unidade com este identificador." })
  }

  next();
}

module.exports = VerificaExistencia;