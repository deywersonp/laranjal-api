const express = require("express");
const rotas = express();

const verificaExistencia = require("./middlewares/VerificaExistencia")
const controladorUnidade = require('./modulos/unidades/controlador/ControladorUnidade')


rotas.get('/unidades', controladorUnidade.listar)
rotas.post('/unidades', controladorUnidade.criar)
rotas.put('/unidades/:id', verificaExistencia, controladorUnidade.atualizar)
rotas.delete('/unidades/:id', verificaExistencia, controladorUnidade.apagar)

module.exports = rotas;