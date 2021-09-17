const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../../../database");
const validarLogin = require("../../../validacoes/validacaoLogin");

async function loginConsultor(req, res) {
    const { email, senha } = req.body;

    try {
        const erroValidacaoLogin = validarLogin(email, senha);

        if (erroValidacaoLogin) {
            return res.status(400).json(erroValidacaoLogin);
        }

        const consultor = await knex("consultores")
            .where("email", "ilike", email)
            .first();

        if (!consultor) {
            return res.status(404).json("Consultor não encontrado.");
        }

        const senhaCorreta = await bcrypt.compare(senha, consultor.senha);

        if (!senhaCorreta) {
            return res.status(400).json("E-mail ou senha incorretos.");
        }

        const token = jwt.sign({ id: consultor.id }, process.env.SENHA_HASH);

        const { senha: _, ...dadosConsultor } = consultor;

        return res.status(200).json({ consultor: dadosConsultor, token });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = loginConsultor;