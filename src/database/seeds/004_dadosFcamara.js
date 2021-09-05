const { v4: uuidv4 } = require("uuid");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dados_fcamara").del()
    .then(function () {
      // Inserts seed entries
      return knex("dados_fcamara").insert([
        {
          secundario_id: uuidv4(),
          nome_completo: "Bruno Sousa",
          email: "brunosousa@fcamara.com",
          cpf: "00000000000"
        },
        {
          secundario_id: uuidv4(),
          nome_completo: "Cristiano Rodrigues",
          email: "cristianorodrigues@fcamara.com",
          cpf: "11111111111"
        },
        {
          secundario_id: uuidv4(),
          nome_completo: "Deywerson Pereira",
          email: "deywersonpereira@fcamara.com",
          cpf: "22222222222"
        },
        {
          secundario_id: uuidv4(),
          nome_completo: "Lucas Jurado",
          email: "lucasjurado@fcamara.com",
          cpf: "33333333333"
        }
      ]);
    });
};
