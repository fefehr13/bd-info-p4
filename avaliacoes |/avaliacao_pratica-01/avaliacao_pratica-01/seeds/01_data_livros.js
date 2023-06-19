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
  return knex('professores')
    .del()
    .then(function() {
      return knex('Livros').insert([
        { nome: 'Livro 1', publicacao: '01', genero: 'genero1' },
        { nome: 'Livro 2', publicacao: '02', genero: 'genero2' },
      ]);
    })

};

