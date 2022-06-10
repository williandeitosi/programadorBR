

let image = document.getElementById("like")


image.addEventListener("click", trocar) 

function trocar(){


    let lastImage = image.getAttribute("src")
    
    image.setAttribute("src", "https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/72/12014-thumbs-down-icon.png"
    )


}


let list = document.getElementById("list")

let num = parseInt(list.getAttribute("num"))

let conteudo = ""

for (let i = 0; i < num; i++) {

    conteudo += "<li>" + i + "</li>"

}

list.innerHTML = conteudo
   