const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite3'
  },
  useNullAsDefault: true
});

const Professores = {
  getAll: async () => {
    return db('professores');
  },

  getById: async (id) => {
    return db('professores').where({ id }).first();
  },

  create: async (professores) => {
    return db('professores').insert(professores);
  },

  update: async (id, professores) => {
    return db('professores').where({ id }).update(professores);
  },

  delete: async (id) => {
    return db('professores').where({ id }).del();
  }
};

module.exports = Professores;