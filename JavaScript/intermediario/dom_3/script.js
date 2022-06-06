function loaded(){


let t = document.getElementById("title")

t.onclick = changeText
}


function changeText() {
    this.innerHTML = "Novo Texto"
}
