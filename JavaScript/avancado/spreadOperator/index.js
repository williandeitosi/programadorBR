 /* Com objetos */
 
 let pessoa = {
    nome: "Willian",
    idade: 26
 }

 let contato = {
    email: "williandeitosi@gmail.com",
    celular: 78943216
 }

 const copia = {...pessoa,...contato}
 copia.idade = 100

 console.log(pessoa)
 console.log(copia)


 /* Com arrays */

 let notasTurma1 = [10, 5, 6, 8, 4]

 let notasTurma2 = [2, 5, 4, 7, 6.6]

 const todasAsNotas = [...notasTurma1,...notasTurma2,]

 console.log(todasAsNotas)