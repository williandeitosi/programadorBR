

let usuarios = [
    "Willian", "Rafaela", "marcio", "Matheus"
]

function inserir (nome,callBack) {
    setTimeout(() => {
        usuarios.push (nome)
        callBack()
    }, 2000)
    
}

function list () {
    console.log(usuarios)
}

inserir("Pedro", list)


/* a funçaõ inserir esta com dois argumentos (nome, callBack), setTimeout esta apenas para dar um delay na execução da funçõa */

/* quando chamamos a função inserir precisamos colocar o nome = "Pedro" para ser adicionado a lista, e colocamos o list para ele escrever na tela a lista ja com a pessoa nova adicionada */

/* como na função inserir o callBack esta depois de usuario.push ele vai executar a lista depois de adicionar o nome novo com o delay de 2sec que eu coloquei */

/* callBack esta ali apenas para chamar a função list para dentro da função inserir */
