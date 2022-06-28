
// REDUCE
const pokemons = [
   {
      nome: "Pikachu",
      tipo: "eletrico"
   },
   {
      nome:"Squirtle",
      tipo:"agua"
   },
   {
      nome:"Magikarp",
      tipo:"agua"
   },
]

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
   console.log(pokemonAtual)

   pokemonsPorTipo[pokemonAtual.tipo] = pokemonsPorTipo[pokemonAtual.tipo] || []

   pokemonsPorTipo[pokemonAtual.tipo].push(pokemonAtual)

   return pokemonsPorTipo
},{})

console.log(pokemonsPorTipo.agua)


// MAP


const produtos = [
   {
      prod: "notebook",
      preco: 2000.00
   },
   {
      prod: "smartphone",
      preco: 1550.00
   }
]

function precoEmReal (p) {
   return p.preco * 2
} 

let resultado = produtos.map(precoEmReal)
console.log(resultado)

// let precoEmReal = produtos.map((p) => {
//    return p.preco * 4
   
// })

