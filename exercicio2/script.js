//Declare e chame as funções abaixo:

//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(valor1, valor2) { 
   return (valor1 + valor2)
}

console.log(soma(6,3))

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function maior(numero1,numero2) {
   return (numero1>=numero2) === true
}

console.log(maior(5,7))

//c) Uma função que receba um número e imprima se ele é par ou não

function par(valor){
   if(valor%2 ===0){
      console.log(valor + " é par")
   }else{
      console.log(valor + " é impar")
   }
}

par(5)

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const frase = "Boa tardee"
function mensagem() {
   console.log(frase.length, frase.toUpperCase()
   )

}

mensagem()