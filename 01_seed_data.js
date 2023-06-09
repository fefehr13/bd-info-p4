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

  // Deletes ALL existing entries
  return knex('tb_alunos').del()
    .then(function () {
      // Inserts seed entries
      return knex('tb_alunos').insert([
        { nome: 'João', email: 'joao@example.com' },
        { nome: 'Maria', email: 'maria@example.com' },
      ]);
    })
    .then(function () {
      return knex('tb_professores').del()
        .then(function () {
          return knex('professores').insert([
            { nome: 'Carlos', email: 'carlos@example.com' },
            { nome: 'Ana', email: 'ana@example.com' },
          ]);
        });
    })
    .then(function () {
      return knex('tb_disciplinas').del()
        .then(function () {
          return knex('tb_disciplinas').insert([
            { nome: 'Matemática', professor_id: 1 },
            { nome: 'História', professor_id: 2 },
          ]);
        });
    });
};

