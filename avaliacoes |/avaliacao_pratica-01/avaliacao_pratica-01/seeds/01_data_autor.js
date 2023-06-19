/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
 

exports.seed = function(knex) {
  return knex('Autor')
    .del()
    .then(function() {
      return knex('Autor').insert([
        { nome: 'Autor 1', biografia: 'ano1', nacionalidade: 'nacionalidade1' },
        { nome: 'Autor 2', biografia: 'ano2', nacionalidade: 'nacionalidade2' },
      ]);
    })

};

