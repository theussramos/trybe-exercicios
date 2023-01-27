// function userInfo() {
//     var userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    
//   }
//   console.log(userEmail);
//   userInfo();






//   if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20







//   var userName = 'Isabella';
//   var userName = 'Lucas';
//   console.log(userName); // Resultado: Lucas






// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition





// const userInfo = {
//     name: 'Cláudio',
//     id: '5489-2',
//     email: 'claudio@email.com',
//   };
  
//   userInfo.name = 'Pedro', userInfo.id = '3333-2', userInfo.email = 'pedraobolado@email.com';
  
//   console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }





// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro








// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');






// function soma (num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2,2));

//  ||
//  ||
//  ||
//   V


// const soma = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(soma(2, 2));

//  ||
//  ||
//  ||
//   V

// const soma = (num1, num2) => num1 + num2;

// console.log(soma(2, 2));







// function contaPalavras (frase) {
//     return frase.split (' ').length;
// }

// console.log(contaPalavras('Fala tribo, beleza?'));

//  ||
//  ||
//  ||
//   V


// const contaPalavras = frase => frase.split(' ').length;

// console.log(contaPalavras('Fala tribo, beleza?'));





// const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

// console.log(objetoPessoa('Matheus', 27));









// // Situação em que é mais simples usar o operador ternário:
// const checkIfElse = (age) => {
//     if (age >= 18) {
//       return `Você tem idade para dirigir!`;
//     } else {
//       return `Você ainda não tem idade para dirigir...`;
//     }
//   };
  
//   const checkTernary = (age) => (
//     age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
//   );
  
//   // ------------------------
  
//   // Situação em que usar o operador ternário não faz muito sentido:
//   const checkIfElse = (fruit) => {
//     if (fruit === `maçã`) {
//       return `Essa fruta é vermelha`;
//     } else if (fruit === `banana`) {
//       return `Esta fruta é amarela`;
//     } else {
//       return `Não sei a cor`;
//     }
//   };
  
//   const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
//     : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
//   // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
//   // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
//   // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
//   // no futuro!