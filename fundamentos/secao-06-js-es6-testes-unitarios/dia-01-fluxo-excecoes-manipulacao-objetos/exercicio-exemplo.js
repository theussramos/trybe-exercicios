const pessoaEstudante = {
    nome: 'Matheus',
    sobrenome: 'Ramos',
    idade: 27,
    eMail: 'theussramos@gmail.com',
};

let adicionaTel = 'telefone';
const telefone = '24999949604';

console.log(pessoaEstudante);

const adicionaKey = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
};

adicionaKey(pessoaEstudante, adicionaTel, telefone);
console.log(pessoaEstudante);




let adicionaGitHub = 'GitHub';
const gitHub = 'https://github.com/theussramos';

adicionaKey(pessoaEstudante, adicionaGitHub, gitHub);
console.log(pessoaEstudante);

let adicionaLinkedIn = 'LinkedIn';
const linkedIn = 'https://www.linkedin.com/in/matheus-ramos-122a00209/';

adicionaKey(pessoaEstudante, adicionaLinkedIn, linkedIn);
console.log(pessoaEstudante);