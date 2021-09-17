require("dotenv").config();

const express = require("express");
const rotas = require("./rotas");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger.json");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: '30mb' }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(rotas);

app.listen(8000, () => console.log("Server is running!"));