const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
  emailListInData.forEach((email) => console.log(`O e-mail ${email} está cadastrado em nosso banco de dados!`));

  // OU

  const emailChecker = (email) => console.log(`O e-mail ${email} está cadastrado em nosso banco de dados!`);

  emailListInData.forEach(emailChecker);