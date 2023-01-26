// function darBoasVindas (nome, idade) {
//     return 'Boas vindas, ' + nome + ', ' + idade + '!';
// }
// let retornoFuncao = darBoasVindas ('Matheus', 27);
// console.log(retornoFuncao);
// console.log(darBoasVindas('Matheus', 27));







// function soma(numero1, numero2, numero3, numero4, numero5) {
//     // let resultado = numero1 + numero2 + numero3 + numero4 - numero5;
//     // return resultado;
//    return numero1 + numero2 + numero3 + numero4 - numero5;
// }
// console.log(soma(13, 19, 15, 12, 10));









// function calcularPontos (vitorias, empates) {
//     let resultado = vitorias * 2 + empates;
//     return resultado;
// }
// console.log('A equipe conseguiu ' + calcularPontos(3, 3) + ' pontos!');








// let cardapio = {
//     'Big Mac': 20,
//     'Big Tasty': 30,
//     'Batata': 20,
//     'Refrigerante': 5,
//     'Suco': 4,
// }
// console.log(cardapio);









// let person = {
//     primeiroNome: 'Joi',
//     segundoNome: 'Silva',
//     estaMeDevendo: true,
//     valorDoPix: 20
// }

// // console.log(person.primeiroNome);
// // // OU 
// // console.log(person['primeiroNome']);



// person.meioPagamento = 'Pix';
// person.valorDoPix = 50;
// person.comidasFavoritas = 'Chocolate',

// person.adress = {
//     rua: 'Vinicius de Morais',
//     numero: 223,
// }

// // console.log('Olá, boas vindas, ' + person.primeiroNome + '!');
// console.log(person);







let object = {
    nome: 'Carolzita',
    outroNome: 'Silva',
};

for (let chave in object){
    console.log(object[chave]);
}