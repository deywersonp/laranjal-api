const express = require("express");
const rotas = express();
const cadastrarConsultor = require("./modulos/consultores/cadastrarConsultor");
const loginConsultor = require("./modulos/consultores/login");

rotas.post("/consultores", cadastrarConsultor);
rotas.post("/login", loginConsultor);

module.exports = rotas;