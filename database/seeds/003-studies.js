const studies = require('../reduced_studies.json')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('studies')
    .truncate()
    .then( ()  => {
      // Inserts seed entries
      return knex.batchInsert('studies', studies, 30);
    });
};
