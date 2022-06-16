


let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")



let circle = {
     x : 250,
     y : 250,
     raio : 100,
     inicio : 0,
     fim : 0,
}



function drawCircle(c) {

    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.strokeStyle = "red"
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.fillStyle = "blue"
    
    ctx.fill()
    ctx.stroke()
}


setInterval(function() {

    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.1
        circle.x += 1
        circle.y += 1
        circle.raio += 0.1
    }

    drawCircle(circle)
}, 60)

