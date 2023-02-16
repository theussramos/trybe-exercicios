// ADICIONANDO NOVOS ELEMENTOS AO OBJETO


const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  //   AQUI ADICIONA NOVO ELEMENTO AO OBJETO
  customer1.lastName = 'Faria';
  //
  console.log(customer1);
  



  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);

  //   AQUI ADICIONA NOVO ELEMENTO AO OBJETO
  customer2['lastName'] = 'Silva';
  //
  console.log(customer2);