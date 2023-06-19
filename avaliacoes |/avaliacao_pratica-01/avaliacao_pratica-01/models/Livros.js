const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite'
  }
});

class Livros {
  static async criarLivro(Livros) {
    try {
      const [id] = await database('Livros').insert(Livros);
      console.log('Livro criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarLivro(id, Livros) {
    try {
      const result = await database('Livros').where({ id }).update(Livros);
      console.log('Livro atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar Livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterLivro(id) {
    try {
      const livro = await database('Livros').where({ id }).first();
      console.log('Livro encontrado:', livro);
    } catch (error) {
      console.error('Erro ao obter livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirLivro(id) {
    try {
      const result = await database('Livros').where({ id }).del();
      console.log('Livro excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Livros;
