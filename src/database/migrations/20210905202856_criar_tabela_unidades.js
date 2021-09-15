exports.up = knex =>
  knex.schema.createTable('unidades', table => {
    table.increments('id').primary()
    table.uuid('secundario_id').notNullable()
    table.uuid('nome_unidade').notNullable().unique()
    table.integer('cep').notNullable()
    table.text('rua').notNullable()
    table.integer('numero')
    table.text('complemento')
    table.text('bairro').notNullable()
    table.text('cidade').notNullable()
    table.text('estado').notNullable()
    table.integer('capacidade_total').notNullable()
    table.integer('capacidade_reduzida')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });

exports.down = knex => knex.schema.dropTable('unidades');
