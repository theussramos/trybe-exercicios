 // 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let numeros = [1];
let soma = 0;

for (let index = 1; index <= 50; index += 1) {
    soma = soma + index;
}
console.log('A soma total de 1 a 50 é: ' + soma);