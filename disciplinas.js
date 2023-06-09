const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite3'
  },
  useNullAsDefault: true
});

const Disciplinas = {
  getAll: async () => {
    return db('disciplinas');
  },

  getById: async (id) => {
    return db('disciplinas').where({ id }).first();
  },

  create: async (disciplinas) => {
    return db('disciplinas').insert(disciplinas);
  },

  update: async (id, disciplinas) => {
    return db('disciplinas').where({ id }).update(disciplinas);
  },

  delete: async (id) => {
    return db('disciplinas').where({ id }).del();
  }
};

module.exports = Disciplinas;