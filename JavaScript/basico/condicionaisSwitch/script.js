var nota1 = 10
var nota2 = 10

var media = (nota1 + nota2) / 2 

var conceito = ""

if (media >= 8) {
    conceito = "Ótimo"
}
else if (media >= 6.5) {
    conceito = "Bom"
}
else {
    conceito = "Regular"
}

console.log(media)
console.log(conceito)

switch (conceito) {
    case "Ótimo":
        console.log("Parabéns")
        break
    
    case "Bom" :
        console.log("Pode melhorar")
        break

    case "Regular" :
        console.log("Estude mais")
        break

    default : "Erro"
    console.log("ERRO")
}
