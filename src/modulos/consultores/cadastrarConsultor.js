const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const knex = require("../../database");
const validarCadastro = require("../../validacoes/validacaoCadastroConsultor");

async function cadastrarConsultor(req, res) {
    const { nome, nome_social, email, senha, admin } = req.body;

    try {
        const erroValidacaoCadastro = validarCadastro(
            nome,
            nome_social,
            email,
            senha,
            admin
        );

        if (erroValidacaoCadastro) {
            return res.status(400).json(erroValidacaoCadastro);
        }

        const emailCadastrado = await knex("consultores").where("email", "ilike", email);

        if (emailCadastrado.length > 0) {
            return res.status(400).json("O e-mail informado já foi cadastrado no sistema.");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const id = uuidv4();
        
        const consultorCadastrado = await knex("consultores").insert({
           id, nome, nome_social, email, senha: senhaCriptografada, admin
        });

        if (consultorCadastrado.length === 0) {
            return res.status(400).json("Erro ao cadastrar consultor.");
        }

        return res.status(200).json();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarConsultor;