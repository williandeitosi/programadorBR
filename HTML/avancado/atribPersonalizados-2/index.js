


let list = document.getElementById("list")


// use o dataset quando você criou um elemento novo para facilitar EX:(data-num = "10")
let num = parseInt (list.dataset.num)


let conteudo = ""

for (let i = 0; i < num; i++) {

    conteudo += "<li>" + i + "</li>"

}

list.innerHTML = conteudo
   