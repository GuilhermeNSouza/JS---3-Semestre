const vendedores = [
    {nome: 'João', totalVenda: 4500},
    {nome: 'Maria', totalVenda: 10000},
    {nome: 'Pedro', totalVenda: 7500},
]
/*let acumulador = 0
for (let i = 0; i < vendedores.length; i++){
    acumulador = acumulador + vendedores [i].totalVenda
}
console.log(acumulador)*/

const totalVendedores = vendedores.reduce((acc, vendedor) => acc + vendedor.totalVenda, 0)
console.log(totalVendedores)