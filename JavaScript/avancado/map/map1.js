/* MAP serve para transformar um array em outro */


const nums = [1, 2, 5, 6, 10]

let resultado = nums.map((e) => {
    return e * 2
})

console.log(resultado)

/* peguei um array e transformei em outro array só que com os números dobrados, ele não altera o array principal */

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)