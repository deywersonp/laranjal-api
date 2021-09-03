exports.up = knex =>
  knex.schema.createTable('unidades', table => {
    table.uuid('id').primary()
    table.integer('cep').notNullable()
    table.text('rua').notNullable()
    table.integer('numero').notNullable()
    table.text('complemento')
    table.text('bairro').notNullable()
    table.text('cidade').notNullable()
    table.text('estado').notNullable()
    table.integer('capacidade_total').notNullable()
    table.integer('capacidade_reduzida')
  });

exports.down = knex => knex.schema.dropTable('unidades');
