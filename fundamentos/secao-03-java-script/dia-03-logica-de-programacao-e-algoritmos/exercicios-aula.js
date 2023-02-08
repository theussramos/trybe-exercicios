let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom'];
let novasPessoasUsuarias = ['Caroline', 'Claudia', 'Murilo','João', 'Danilo', 'Anderson', 'Nadijane', 'Paulo'];

for (let index = 0; index < sistemas.length; index += 1) {
    }

let login = 'usuarioTrybe';
let senha = 'trybe2023';
let temAcesso = false;

if (login === 'usuarioTrybe' && senha === 'trybe2023') {
    console.log('Tem Acesso!');
    temAcesso = true;
} else {
        console.log ('Acesso negado!');
        temAcesso = false;
    }

    if (temAcesso === true) {
        console.log('Foi!');
        for (let indexSistemas = 0; indexSistemas < sistemas.length; indexSistemas += 1) {
            console.log('Sistemas: ' + sistemas[indexSistemas]);
            for (let indexPessoas = 0; indexPessoas < novasPessoasUsuarias.length; indexPessoas += 1) {
                console.log(novasPessoasUsuarias[indexPessoas]);
            }
        }
    }