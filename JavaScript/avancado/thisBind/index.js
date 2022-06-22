/* This = depende do contexto ou do escopo que eu estou */


function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

cat.speak()
dog.speak()

speakGeneric() // fora de contexto , porquê cat e dog esta fora do scopo da função

let binded = speakGeneric.bind(dog) // coloquei o dog dentro da função
binded()