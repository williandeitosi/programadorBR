
/*

if (idade >= 35) {
    console.log("Pode")
    console.log("Qual o seu pedido?")
} 
else if (idade >= 18) {
    console.log("Pode")
    console.log("Mostre a identidade")
}
else {
    console.log("Não pode")
    console.log("Volte quando for maior de 18")
}

*/

/* Uma maneira mais complicada */


/* && = e 

if (idade >= 18 && idade <= 70) {
    console.log("Pode")
    console.log("Qual o seu pedido?")
} 
else {
    console.log("Não pode")
    console.log("Volte para sua casa")
}

*/

/* || = ou */


/*

if (idade < 18 || idade > 70) {
    console.log("Pode")
    console.log("Qual o seu pedido?")
} 
else {
    console.log("Não pode")
    console.log("Volte para sua casa")
}

*/


/* Criado por mim =) */
var idade = prompt("Qual a sua idade ?")

if (idade >= 25) {
    var p = prompt("O que vai beber?")
    console.log("Aqui está seu(a) " + p)
}
else if (idade >= 18) {
    alert("Você só podera beber Cerveja")
    var p = prompt("Qual Cerveja quer tomar?")
    console.log("Aqui esta sua " + p)
}
else {
    console.log ("Volte quando for maior de 18")
}