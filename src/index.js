require("dotenv").config();

const express = require("express");
const rotas = require("./rotas");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(rotas);

app.listen(8000, () => console.log("Server is running!"));