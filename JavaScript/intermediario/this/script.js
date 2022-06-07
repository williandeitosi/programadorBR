let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")

t1.onclick = maiuscula
t2.onclick = maiuscula

function maiuscula() {
    this.innerHTML = this.innerHTML.toUpperCase()


}