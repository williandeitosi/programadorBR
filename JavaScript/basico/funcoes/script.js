/* 
function serve para apenas nome a um bloco de comando 
*/






/*

function media(n1, n2) {
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2
     console.log(media)

    return media
    /* 
    return serve para rerotnar algum dado e você utilizado , não apenas escrever na tela
     *//*
}

var resultado = media(10, 9)


console.log(resultado) */






/* função dentro de uma variavel (função anônima) */



/* var media = function(n1, n2) {

    return(n1 + n2) / 2
}

var m = media(5, 6)

console.log(m)*/

/* TESTE


function media (n1, n2) {
 let numero1 = n1
 let numero2 = n2
 let media = (n1 + n2) / 2
 console.log(media)
}

media(10, 5)
media(8, 2)
media(5, 1)
*/



    let btn = document.getElementById("calc")

    btn.addEventListener("click",media)

    function media() {
        let n1 = parseFloat(document.getElementById("n1").value)
        let n2 = parseFloat(document.getElementById("n2").value)
        
        
        let media = (n1 + n2) / 2

        document.getElementById("md").value = media

    }
