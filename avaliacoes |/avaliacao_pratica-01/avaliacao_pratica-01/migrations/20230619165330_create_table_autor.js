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
      .createTable('Autor', function(table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('biografia').notNullable().unique(); 
        table.string('nacionalidade').notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('Autor')
  };
  