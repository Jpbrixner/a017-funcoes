//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function funcaoNome() {
//   const nome = prompt("Diga seu nome");
//   console.log(`Olá, ${nome}!`);
// }

// funcaoNome();

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada(numero) {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i of array) {
//     console.log(`${numero} x ${Number(i)} = ${numero * i}`);
//   }
// }

// tabuada(6)

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

const funcaoNome = () => {
  const nome = prompt("Diga seu nome");
  return nome;
};
console.log(`Olá, ${funcaoNome()}!`);


const funcaoTabuada = (numero) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i of array) {
    console.log(`${numero} x ${Number(i)} = ${numero * i}`);
  }
};

funcaoTabuada(6)