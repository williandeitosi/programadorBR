

let usuarios = [
    "Willian", "Rafaela", "marcio", "Matheus"
]

function inserir (nome) {

    let promise = new Promise (function (resolve, reject) {

        setTimeout(() => {
            usuarios.push (nome)

            let error = false

            if (!error) {
                resolve()
            } else {
                reject({msg: "qualquer ERRO"})
            }
        }, 2000)
        
    })

    return promise

}

function list () {
    console.log(usuarios)
}


const executar = async () => {

    await inserir("PEdro")
    list()

}
executar()



/* Maneira mais nova para substituir o callBack que é as promises */

/* ainda não ficou muito claro para mim sobre promises */