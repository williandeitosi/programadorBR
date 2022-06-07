
/*
function mudarCor() {
    let h = document.getElementsByTagName("h1")[0]
    h.style.color = "blue"

}



function mudarTexto() {
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML = "Novo Título"

    //setTimeout(mudarCor, 1000) // 1000 para ser o deley de 1seg

    setInterval(mudarCor, 3000)

}

*/
var numero = 0
function atualizarTexto() {

    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML += " " + numero
    numero++



}

function mudarTexto() {


    setInterval(atualizarTexto, 3000)
}