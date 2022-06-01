var alunos = ["Willian", "Rafaela", "Gustavo", "Joao"]


/*
for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}
*/


/* Maneira mais pratica
    pode usar "of" ao inves de "in"
*/
for (var i in alunos) {
    console.log(alunos[i])
}