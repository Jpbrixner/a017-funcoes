//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma(valor1, valor2) { 
    return (valor1 + valor2)
}

function menos(valor1, valor2) {
    return(valor1-valor2)
}

function divisao(valor1,valor2) {
    return(valor1/valor2)
}

function multiplicacao(valor1, valor2) {
    return(valor1*valor2)
}

//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const valor1 = +prompt("Digite um numero")
const valor2 = +prompt("Digite outro numero")

console.log(soma(valor1,valor2))
console.log(menos(valor1,valor2))
console.log(divisao(valor1,valor2))
console.log(multiplicacao(valor1,valor2))