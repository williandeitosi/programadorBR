

const aluno = {
   matricula: 1234,
   nome:"Willian",
   celular: 12349875,
   cidade: "São Paulo"
}
const aluno2 = {
   matricula: 123465465,
   nome:"Rafaela",
   celular: 12349115,
   cidade: "São Paulo"
}

// let {matricula} = aluno
// console.log(matricula)

//Assim eu só pego a matricula e não o obejto inteiro

let {matricula, nome, ...resto} = aluno
console.log(resto)
console.log(matricula)
console.log(nome)

/* Eu tiro matricula e nome do array e tenho que chamar separado */


let alunos = [aluno, aluno2]

let [willian, Rafaela] = alunos

console.log(alunos)// mostra o array junto, a ordem importa dos nomes dados no array

console.log(willian) // chamar separado
console.log(Rafaela)