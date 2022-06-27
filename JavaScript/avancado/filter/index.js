
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


const alunosComMenosde30 = ((aluno) => {
    return aluno.idade < 30 
    

})

const alunosComMaisde30 = ((aluno) => {
    return aluno.idade > 30
})


console.log("Menos de 30 anos", jogadores.filter(alunosComMenosde30))
console.log("Mais de 30 anos", alunos.filter(alunosComMaisde30))


/* foi craiado um filtro generico , pode ver que eu consegui usar para dois arrays diferentes e poderia usar para outros se criasse mais */





