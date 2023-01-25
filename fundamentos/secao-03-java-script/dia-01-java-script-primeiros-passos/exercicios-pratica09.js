const custoProduto = 200;
const valorVenda = 200;
const custoTotalProduto = custoProduto * 1.2
const lucroTotal = (valorVenda - custoTotalProduto) * 1000;

if (valorVenda < custoTotalProduto && valorVenda > 0) {
    console.log('Sua mula. Como vende mais barato do que comprou?!');
}
else if (valorVenda >= 0 && custoProduto >= 0) {
    console.log('O seu lucro na venda de 1000 unidades foi R$' + lucroTotal + ',00!');
}
else if (valorVenda < 0 || custoProduto < 0) {
    console.log('Erro: Os valores não podem ser negativos!');
}