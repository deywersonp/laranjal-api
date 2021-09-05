exports.up = knex =>
  knex.schema.createTable('consultores', table => {
    table.increments('id').primary()
    table.uuid('secundario_id').notNullable()
    table.text('nome').notNullable()
    table.text('nome_social')
    table.text('imagem')
    table.text('email').notNullable()
    table.text('senha').notNullable()
    table.boolean('admin').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });

exports.down = knex => knex.schema.dropTable('consultores');
