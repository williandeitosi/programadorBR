

let video = document.getElementById("video1")
let box = document.getElementById("container")

function play() {
    video.play()
}

function pause() {
    video.pause()
}

function stop() {
    video.pause()
    video.currentTime = 0
}

function voltar() {
    video.currentTime -= 2
}

function avancar() {
    video.currentTime += 2
}

function aumentar() {
    video.playbackRate += 0.1
}

function diminuir() {
    video.playbackRate -= 0.1
}






