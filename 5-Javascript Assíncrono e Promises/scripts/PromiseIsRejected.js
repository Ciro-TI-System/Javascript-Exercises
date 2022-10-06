// Promessa é rejeitada e usamos o catch() para capturar o erro
let aceitar = false

console.log('pedir uber') 
const promessa2 = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('Pedido aceito!')
	}
		return reject('Pedido negado!')
})

console.log('aguardando')

promessa2
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'))