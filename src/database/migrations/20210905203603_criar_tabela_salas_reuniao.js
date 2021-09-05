exports.up = knex =>
  knex.schema.createTable('salas_reuniao', table => {
    table.increments('id').primary()
    table.uuid('secundario_id').notNullable()
    table.integer('unidade_id')
      .references('unidades.id')
      .notNullable()
      .onDelete('CASCADE')
    table.text('nome').notNullable()
    table.integer('capacidade_total_pessoas').notNullable()
    table.text('recursos_disponiveis')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });

exports.down = knex => knex.schema.dropTable('salas_reuniao');
