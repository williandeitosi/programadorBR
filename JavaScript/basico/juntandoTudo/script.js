// Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado


var nomes = ["Willian", "José", "Rafaela"]
var notas1 = [8, 5, 9.5]
var notas2 = [7.5, 5.5, 10]


function media(n1, n2) {

    return(n1 + n2) / 2
}


function passou(media) {
    if (media > 6) {
        return "Aprovado"
    }
    else {
        return "Reprovado"
    }
    
}


for (var i in nomes) {

    var notaA = notas1[i]
    var notaB = notas2[i]
    var m = media(notaA, notaB)

    console.log(nomes[i] +
                " - " + 
                notaA +
                " - " + 
                notaB +
                " - " +
                m +
                " - " + passou(m))
}