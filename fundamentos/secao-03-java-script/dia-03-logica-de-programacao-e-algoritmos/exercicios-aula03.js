//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisiveisPorTres = [];

for (let index = 2; index <= 150; index += 1) {
    if (index % 3 === 0) {
        divisiveisPorTres.push(index);
    }
}
if (divisiveisPorTres.length === 50) {
    console.log('Mensajona secreta bolada');
}
console.log(divisiveisPorTres.length);