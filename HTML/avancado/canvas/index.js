

let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

/* desenhar uma linha

ctx.moveTo(0,0)
ctx.lineWidth = 5
ctx.strokeStyle = "green"
ctx.lineTo(250,250)
ctx.lineTo(500,0)
ctx.stroke()

*/


/* Retangulo preenchido

ctx.fillStyle = "green"
ctx.fillRect(10, 10, 100, 200)

*/


/*  Apenas o contorno 
ctx.strokeStyle = "blue"
ctx.strokeRect(10, 10, 100, 200)
*/



/*  Retangulo com borda de cor diferente
ctx.rect(10, 10, 100, 200)
ctx.fillStyle = "blue"
ctx.strokeStyle = "green"
ctx.lineWidth = 5
ctx.fill()
ctx.stroke()
ctx.clearRect (20,20,30,30)  */




ctx.beginPath() /* começa uma nova linha */

ctx.lineWidth = 4
ctx.strokeStyle = "red"
ctx.moveTo(10, 10)
ctx.lineTo(400, 300)
ctx.stroke()


ctx.beginPath()

ctx.lineWidth = 7
ctx.strokeStyle = "blue"
ctx.moveTo(10, 50)
ctx.lineTo(200, 300)
ctx.lineTo(100, 300)
ctx.closePath() /* fecha altomaticamente as linhas  */
ctx.fillStyle = "yellow"
ctx.stroke()
ctx.fill()