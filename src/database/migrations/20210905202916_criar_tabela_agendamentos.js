exports.up = knex =>
  knex.schema.createTable('agendamentos', table => {
    table.increments('id').primary()
    table.uuid('secundario_id').notNullable()
    //referencias
    table.integer('unidade_id')
      .references('unidades.id')
      .notNullable()
      .onDelete('CASCADE')

    table.integer('consultor_id')
      .references('consultores.id')
      .notNullable()
      .onDelete('CASCADE')

    table.date('data_visita').notNullable()
    table.text('espaco_agendado').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });

exports.down = knex => knex.schema.dropTable('agendamentos');
