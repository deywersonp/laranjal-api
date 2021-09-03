exports.up = knex =>
  knex.schema.createTable('agendamentos', table => {
    table.uuid('id').primary()
    //referencias
    table.uuid('unidade_id')
      .references('unidades.id')
      .notNullable()
      .onDelete('CASCADE')

    table.uuid('consultor_id')
      .references('consultores.id')
      .notNullable()
      .onDelete('CASCADE')

    table.date('data_visita').notNullable()
    table.text('espaco_agendado')
  });

exports.down = knex => knex.schema.dropTable('agendamentos');
