exports.up = knex => 
    knex.schema.createTable("dados_fcamara", table => {
        table.increments("id").primary()
        table.uuid("secundario_id").notNullable()
        table.text("nome_completo").notNullable()
        table.text("email").notNullable()
        table.text("cpf").notNullable().unique("cpf")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    });

exports.down = knex => knex.schema.dropTable("dados_fcamara");
