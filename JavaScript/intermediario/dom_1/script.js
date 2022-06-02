function h1click() {
    console.log("Teste")
}

function changeh1() {
    let outro = document.getElementById("text")
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = outro.value
}


function hideH1() {
    let title = document.getElementsByTagName("h1")[0]
    title.style.display = "none"

}