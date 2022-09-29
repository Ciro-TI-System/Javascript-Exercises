// Promessa é rejeitada e usamos o catch() para capturar o erro

console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
	return reject('pedido negado!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
let aceitar = true

console.log('pedir uber') 
const promise = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}

	return reject('pedido negado!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'))