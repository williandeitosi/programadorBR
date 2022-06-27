

function novoAluno (nome, idade) {
   return {nome, idade}
}

let alunos = [
   novoAluno("Willian", 26),
   novoAluno("Rafaaela", 20),
   novoAluno("Maria", 35),
   novoAluno("Celia", 45),
]

function idadeDaTurma (total, aluno) {
   return total + idade.aluno
}

console.log(alunos.reduce(idadeDaTurma,0))