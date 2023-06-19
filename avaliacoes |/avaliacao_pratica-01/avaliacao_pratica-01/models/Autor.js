const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite'
  }
});

class Autor {
  static async criarAutor(Autor) {
    try {
      const [id] = await database('Autor').insert(Autor);
      console.log('Autor criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarAutor(id, Autor) {
    try {
      const result = await database('Autor').where({ id }).update(Autor);
      console.log('Autor atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterAutor(id) {
    try {
      const autor = await database('Autor').where({ id }).first();
      console.log('Autor encontrado:', autor);
    } catch (error) {
      console.error('Erro ao obter autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirAutor(id) {
    try {
      const result = await database('Autor').where({ id }).del();
      console.log('Autor excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir autor:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Autor;
