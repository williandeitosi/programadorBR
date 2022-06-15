

let music = document.getElementById("audio")

music.addEventListener("click",play)

function play() {
    music.play()
}

function pause() {
    music.pause()
}

function stop() {
    music.pause()
    music.currentTime = 0
}

function rapido() {
    music.playbackRate += 0.1
}

function lento() {
    music.playbackRate -= 0.1
}

function avanca() {
    music.currentTime += 10
}

function retorna() {
    music.currentTime -= 10
}