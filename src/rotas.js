const express = require("express");
const rotas = express();
const cadastrarConsultor = require("./modulos/consultores/cadastrarConsultor");
const loginConsultor = require("./modulos/consultores/login");
const verificarToken = require("./filtros/verificarToken");

rotas.post("/consultores", cadastrarConsultor);
rotas.post("/login", loginConsultor);

rotas.use(verificarToken);


module.exports = rotas;