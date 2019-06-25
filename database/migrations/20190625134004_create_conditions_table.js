
exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', tbl => {
      tbl.increments()

      tbl
      .string('conditionName',128)
      .notNullable()
      .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('conditions');
};
