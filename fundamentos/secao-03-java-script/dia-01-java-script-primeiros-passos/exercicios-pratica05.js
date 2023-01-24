let peca = 'peão';
let movimento

switch (peca) {
    case 'bispo':
        movimento = 'A peça se move em diagonal!'
        break;
    case 'cavalo':
        movimento = 'A peça se move em L!'
        break;
    case 'rei':
        movimento = 'Uma casa em qualquer direção!'
        break;
    case 'rainha':
        movimento = 'Ela é a pica. Se move pra onde quiser, quantas casas quiser!'
        break;
    case 'peão':
        movimento = 'Só se move para frente. No primeiro movimento pode se mover até duas casas. Depois do primeiro movimento, só pode andar uma casa por vez!'
        break;

    default:
        movimento = 'Que porra de peça é essa?!'
}
console.log(movimento);