
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {conditionName: 'Ovarian Cancer'},
        {conditionName: 'Stomach Cancer'},
        {conditionName: 'Breast Cancer'},
        {conditionName: 'Throat Cancer'},
        {conditionName: 'Pancreatic Cancer'},
      ]);
    });
};
