const express = require("express");
const rotas = express();

const controladorUnidade = require('./modulos/unidades/controlador/ControladorUnidade')

rotas.get('/unidades', controladorUnidade.listar)
rotas.post('/unidades', controladorUnidade.criar)
rotas.put('/unidades/:id', controladorUnidade.atualizar)
rotas.delete('/unidades/:id', controladorUnidade.apagar)

module.exports = rotas;