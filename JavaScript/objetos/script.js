// assim você não precisa mexer em todas as variaveis e sim apenas em uma 

/*var calcMedia = function(n1, n2) {
    
    return (n1 + n2) / 2
}*/


/*
var calcMedia = function() {
    
    return (this.notas[0] + this.notas[1]) / 2
}


var aluno = {
    nome: "Willian",
    notas: [5, 5],

    media: calcMedia
}

var aluno1 = {
    nome: "João",
    notas: [7, 5],

    media: calcMedia
}


console.log(
    aluno["nome"],
    aluno.media
    (aluno.notas[0],
    aluno.notas[1]
))

console.log(
    aluno1["nome"],
    aluno1.media
    (aluno1.notas[0],
    aluno1.notas[1]
))
*/



/* formas de criar alunos */

function criarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno("Willian", 10, 6),
    criarAluno("Matheus", 5, 5),
    criarAluno("Rafaela", 9, 9.5)
]

var aluno = turma[0]

for (var aluno of turma) {
    console.log(aluno.nome + " - " + aluno.media())
}