/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};


exports.up = function(knex) {
    return knex.schema
      .createTable('Livros', function(table) {
        table.increments('id');
        table.string('titulo').notNullable();
        table.string('publicacao').notNullable().unique(); 
        table.string('genero').notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('Livros')
  };
  