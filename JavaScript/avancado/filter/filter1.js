const produtos = [
    {nome:"NoteBook" ,preco: 2500 ,fragil: true ,},
    {nome:"Celular" ,preco: 1620,fragil: true,},
    {nome:"TV" ,preco: 4250,fragil: true ,},
    {nome:"Cadeira" ,preco: 1000,fragil: false,},
]

console.log(produtos.filter(function (p) {
    
    if (p.preco >= 1500 && p.fragil == true) {
        return p
    }
}))

const caro = produtos => produtos.preco >= 1700
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))