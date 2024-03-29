// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });


  const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} não é válido`));
    }, 1000);
  });


const randomPromise = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if(randomNumber % 2 === 0) {
            resolve(randomNumber);
        } else {
            reject(new Error(`O número ${randomNumber} não é válido. Somente números páres são válidos.`))
        }
    }, 1000);
})

// resolvedPromise().then((response) => {
//  console.log(`Resolved: O numero gerado é ${response}`);
// });

// rejectedPromise()
//     .then((response) => {
//     console.log(`Rejected: O numero gerado é ${response}`);
//    })
//     .catch((error) => {
//     console.log(`Rejected: ${error.message}`);
// });

randomPromise()
    .then(response => {
    console.log(`Promise resolvida: O número gerado é ${response}`);
})
    .catch(error => {
    console.log(`Promise rejeitada: ${error.message}`);
});