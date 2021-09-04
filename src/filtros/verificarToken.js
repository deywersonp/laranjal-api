const knex = require("../database");
const jwt = require("jsonwebtoken");

const verificarToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json("Acesso não autorizado.");
    }

    try {
        const token = authorization.replace("Bearer ", "").trim();

        const { id } = jwt.verify(token, process.env.SENHA_HASH);

        const consultorExiste = await knex("consultores").where({ id }).first();

        if (!consultorExiste) {
            return res.status(404).json("Consultor não encontrado.");
        }

        const { senha, ...consultor } = consultorExiste;

        req.consultor = consultor;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificarToken;