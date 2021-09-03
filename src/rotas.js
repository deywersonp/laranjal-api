const express = require("express");
const rotas = express();
const cadastrarConsultor = require("./modulos/consultores/cadastrarConsultor");

rotas.post("/consultores", cadastrarConsultor);

module.exports = rotas;