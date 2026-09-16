const carro = [
    {marca: 'cheverolet'},
    {modelo: '1999'},
    {ano: 1999}
]

console.log('Marca do carro: ' + carro.marca + ' Modelo do carro: ' + carro.modelo + ' Ano do carro ' + carro.ano)

const corEscolhida = prompt("adicione uma cor")
const novaPropiedade = {
    cor: (corEscolhida)
}

carro.push(novaPropiedade)

console.log('Marca do carro: ' + carro.marca + ' Modelo do carro: ' + carro.modelo + ' Ano do carro ' + carro.ano + ' cor escolhida ' + carro.cor)