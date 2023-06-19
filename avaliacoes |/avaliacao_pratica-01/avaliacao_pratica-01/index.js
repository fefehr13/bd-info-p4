const Autor = require('./models/Autor');
const Livros = require('./models/Livros');

// Exemplo de uso
const exemploAutor = {
  nome: 'Suzzane Collins',
  biografia: 'ano1988',
  nacionalidade: 'estadunidense'
};

Autor.criarAutor(exemploAutor);


const exemploLivros = {
    nome: 'Jogos Vorazes',
    publicacao: 'ano2010',
    genero: 'fantasia'
  };
  
Livros.criarLivro(exemploLivros);
  