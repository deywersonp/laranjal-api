exports.up = knex =>
  knex.schema.createTable('consultores', table => {
    table.uuid('id').primary()
    table.text('nome').notNullable()
    table.text('nome_social')
    table.text('imagem')
    table.text('email').notNullable()
    table.text('senha').notNullable()
    table.boolean('admin').notNullable()
  });

exports.down = knex => knex.schema.dropTable('consultores');
