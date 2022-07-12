/* MAP serve para transformar um array em outro */
const novoAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    novoAluno("willian", 26),
    novoAluno("Rafaela", 20),
    novoAluno("Sheila", 31),
    novoAluno("Laercio", 56),

]

let jogadores = [
    novoAluno("Maikon", 26),
    novoAluno("Murilo", 20),
    novoAluno("Gustavo", 31),
    novoAluno("Rafel", 56),

]


let nomeIdade = (aluno) => {
    // return aluno.nome + " tem " + aluno.idade + " anos"
    return {
        name: aluno.nome,
        age: aluno.idade + 5
    }// não cometa erros aqui pq vai dar um grande problema
}

console.log(jogadores.map(nomeIdade))


/* map deixa eu mudar a forma como o array vai ser mostrado */



