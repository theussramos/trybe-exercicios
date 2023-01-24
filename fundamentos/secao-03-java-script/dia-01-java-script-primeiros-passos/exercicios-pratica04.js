const ladoa = 50;
const ladob = 35;
const ladoc = 95;

let somaDosAngulos = ladoa + ladob + ladoc;
let angulosPositivos = ladoa > 0 && ladob > 0 && ladoc > 0;

if (angulosPositivos){
    if (somaDosAngulos === 180) {
        console.log('Esse forma geométrica é triângulo!');
    } else {
        console.log('Essa forma geométrica não é um triângulo!');
    }
}else {
    console.log('Erro: ângulo inválido!');
}
