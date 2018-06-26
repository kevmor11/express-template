exports.up = (knex, Promise) => {
  return knex.schema.createTable('product', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.timestamps(false, true);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('product');
};
