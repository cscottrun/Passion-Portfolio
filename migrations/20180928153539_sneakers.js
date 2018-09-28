
exports.up = function(knex) {
  return knex.schema.createTable('sneakers', (table) => {
    table.increments();
    table.integer('user_id');
    table.string('brand');
    table.string('title');
    table.float('year', 4, 0);
    table.integer('condition');
    table.string('image');
    table.float('size',3,1);
    table.string('color');
    table.boolean('public');
    table.float('cost',9,2);
    table.float('market',9,2);
    table.string('sale_status');
    table.float('listing_price',9,2);
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sneakers');
};