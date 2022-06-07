
let pessoas = ["Willian", "Rafaela", "Laércio", "Carol"]



function sortear() {

    np = pessoas.length

    ns = Math.floor(Math.random() * np)

    let h1 = document.getElementsByTagName("h1")[0]

    h1.innerHTML = pessoas[ns]
}