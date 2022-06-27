
// const novoAluno = (nome, idade) => {
//     return {nome, idade}
// }

// let alunos = [
//     novoAluno("willian", 26),
//     novoAluno("Rafaela", 20),
//     novoAluno("Sheila", 31),
//     novoAluno("Laercio", 56),

// ]

// let jogadores = [
//     novoAluno("Maikon", 26),
//     novoAluno("Murilo", 20),
//     novoAluno("Gustavo", 31),
//     novoAluno("Rafel", 56),

// ]

// // Esse é um grande erro
// let nomeIdade = (aluno) => {
//     let novoAluno = aluno
//     novoAluno.idade += 5
//     return novoAluno
// }

// console.log(jogadores.map(nomeIdade))


let turma1 = ["Willian", "Igor", "Marcos"]

let turma2 = [...turma1]

turma2.push("Maria")

// Uma forma de criar uma copia do array principal é utilizando o .slice()

// outra forma de copiar [...turma1]



let alunoA = {nome:"Willian", idade:26}

let alunoB = Object.assign({}, alunoA)

alunoB.idade = 40

// copiar nos objetos é utilizando Object.assign({}, alunoA)

// outra forma de copiar {...alunoA}

