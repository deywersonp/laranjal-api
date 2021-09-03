exports.up = knex =>
  knex.schema.createTable('feedbacks', table => {
    table.uuid('id').primary()
    table.text('feedback').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });

exports.down = knex => knex.schema.dropTable('feedbacks');
