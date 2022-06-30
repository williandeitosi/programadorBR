let nome = ""
try {

    if (nome == "") {
        throw "O nome esta vazio"
    }
    console.log(nome) // O erro deste código não deixa aparecer o boa noite do outro console

} catch (erro) {
    console.log("Houve um erro.", erro)
}



console.log("Boa noite")


/* Serve para que o erro não pare o restante do código, e usar o tryCatch mostra o erro e execulta o restante do código */