// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
  
//   const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//     objeto[novaPropriedade] = valor;
//   };
  
//   adicionaPropriedade(customer, newKey, lastName);
//   console.log(customer);






// Desta forma, sempre que houver a necessidade de criar novas propriedades para o objeto, 
// basta declarar as novas variáveis referentes às novas chaves e valores e chamar a função novamente,
//  como no exemplo abaixo, em que foi criada a chave fullName:



const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
  };
  
  adicionaPropriedade(customer, newKey, lastName);
  console.log(customer);
  


  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  

  adicionaPropriedade(customer, newKey, fullName);
  console.log(customer);