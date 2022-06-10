/*
* Carne - 400gr por pessoa  ++ de 6h - 650
* Cerveja - 1200ml por pessoa ++ de 6h - 2000ml
* Refrigerante/agua - 1000 ml por pessoa ++ 6h 1500 ml

* Crianças valem por 0,5
*/



let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
    console.log(qtCarne)

    let qtCerveja = cervejaPP(duracao) * adultos
    console.log(qtCerveja)

    let qtRefri = refriAguaPP(duracao) * adultos + (refriAguaPP(duracao)/2 * criancas)
    console.log(qtRefri)

    resultado.innerHTML = `<p>${qtCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtRefri / 2000)} Garrafas de Bebidas</p>`
    
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refriAguaPP(duracao) {
    if(duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}