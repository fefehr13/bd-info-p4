const Aluno = require('./models/Aluno');
const Professor = require('./models/Professor');
const Disciplina = require('./models/Disciplina');

// Exemplo de uso
const exemploAluno = {
  nome: 'João',
  email: 'joao@example.com'
};

Aluno.criarAluno(exemploAluno);

