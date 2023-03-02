const cotacaoDolar = 5.19;
const cotacaoBitcoin = 122647.20;
const cotacaoEuro = 5.51;

const realToDolar = (valor) => valor / cotacaoDolar;
const dolarToReal = (valor) => valor * cotacaoDolar;
const realToBitcoin = (valor) => valor / cotacaoBitcoin;
const bictoinToReal = (valor) => valor * cotacaoBitcoin;
const realToEuro = (valor) => valor / cotacaoEuro;
const EuroToReal = (valor) => valor * cotacaoEuro;

const converterMoeda = (valor, funcaoConversao) => funcaoConversao(valor);

console.log(converterMoeda(10, dolarToReal).toFixed(2));