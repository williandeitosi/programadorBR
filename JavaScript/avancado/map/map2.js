const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

let objeto = json => JSON.parse(json)

let apenasPreco = produto => `R$ ${parseFloat(produto.preco).toFixed(2).replace(".", ",")}`

const resultado = carrinho.map(objeto).map(apenasPreco)

console.log(resultado)