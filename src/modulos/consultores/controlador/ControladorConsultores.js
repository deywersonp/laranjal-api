const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const knex = require("../../../database");
const validarCadastro = require("../../../validacoes/validacaoCadastroConsultor");
const validarAtualizacao = require("../../../validacoes/validacaoAtualizacaoConsultor");
const cadastrarImagem = require("../../../utils/cadastrarImagem");
const excluirImagem = require("../../../utils/excluirImagem");
const obterNomeDaImagem = require("../../../utils/obterNomeDaImagem");

async function listarConsultores(req, res) {
    try {
        const consultores = await knex("consultores")
            .select(
                "nome",
                "nome_social",
                "email",
                "imagem",
                "admin"
            )
            .orderBy("nome", "asc");

        return res.status(200).json(consultores);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async function obterConsultor(req, res) {
    const { id } = req.params;
    
    try {
        const consultor = await knex("consultores")
            .where({ id })
            .first()
            .select(
                "nome",
                "nome_social",
                "imagem",
                "email",
                "admin"
            );

        if (!consultor) {
            return res.status(404).json("Consultor não encontrado.");
        }

        return res.status(200).json(consultor); 
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async function cadastrarConsultor(req, res) {
    const { nome, nome_social, email, senha } = req.body;

    try {
        const erroValidacaoCadastro = validarCadastro(
            nome,
            nome_social,
            email,
            senha
        );

        if (erroValidacaoCadastro) {
            return res.status(400).json(erroValidacaoCadastro);
        }

        const emailCadastrado = await knex("consultores").where("email", "ilike", email);

        if (emailCadastrado.length > 0) {
            return res.status(400).json("O e-mail informado já foi cadastrado no sistema.");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const consultorCadastrado = await knex("consultores").insert({
           id: uuidv4(), nome, nome_social, email, senha: senhaCriptografada, admin: false
        });

        if (consultorCadastrado.length === 0) {
            return res.status(400).json("Erro ao cadastrar consultor.");
        }

        return res.status(201).json();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async function atualizarConsultor(req, res) {
    const { nome_social, imagem, senha } = req.body;
    const { consultor } = req;
    let urlImagem;
    let senhaCriptografada;
    let nomeDaImagem = `$consultor${consultor.id}/avatar`;

    if (!nome_social && !imagem && !senha) {
        return res.status(400).json("Insira ao menos um campo para atualização.");
    }

    try {
        const erroValidacaoAtualizacao = validarAtualizacao(
            nome_social, senha
        );

        if (erroValidacaoAtualizacao) {
            return res.status(400).json(erroValidacaoAtualizacao);
        }

        if (imagem) {
            if (consultor.imagem) {
                const nomeDaImagemDB = obterNomeDaImagem(consultor.imagem);

                const erroAoExcluir = await excluirImagem(nomeDaImagemDB);

                if (erroAoExcluir) {
                    return res.status(400).json(erroAoExcluir);
                }

                nomeDaImagem = `consultor${consultor.id}/avatar` + Math.floor(Math.random() * 10000);
            }

            const buffer = Buffer.from(imagem, "base64");

            const imagemCadastrada = await cadastrarImagem(nomeDaImagem, buffer);

            if (imagemCadastrada.erro) {
                return res.status(400).json(imagemCadastrada.erro);
            }

            urlImagem = imagemCadastrada.url;
        }

        if (senha) {
            senhaCriptografada = await bcrypt.hash(senha, 10);
        }

        const consultorAtualizado = await knex("consultores")
            .where({ id: consultor.id })
            .update({
                nome_social,
                senha: senhaCriptografada,
                imagem: urlImagem
            });
        
        if (!consultorAtualizado) {
            const erroAoExcluir = await excluirImagem(nomeDaImagem);

            if (erroAoExcluir) {
                return res.status(400).json(erroAoExcluir);
            }

            return res.status(400).json("Erro ao atualizar dados do perfil do consultor.");
        }

        return res.status(204).json();
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

async function removerConsultor(req, res) {
    const { id } = req.params;

    try {
        const consultor = await knex("consultores")
            .where({ id })
            .first();
        
        if (!consultor) {
            return res.status(404).json("Consultor não encontrado.");
        }

        const nomeDaImagemDB = obterNomeDaImagem(consultor.imagem);
        
        const erroAoExcluir = await excluirImagem(nomeDaImagemDB);

        if (erroAoExcluir) {
            return res.status(400).json(erroAoExcluir);
        }

        const consultorExcluido = await knex("consultores")
            .where({ id })
            .del();
        
        if (!consultorExcluido) {
            return res.status(400).json("Erro ao remover consultor.");
        }

        return res.status(200).json();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarConsultores,
    obterConsultor,
    cadastrarConsultor,
    atualizarConsultor,
    removerConsultor
}