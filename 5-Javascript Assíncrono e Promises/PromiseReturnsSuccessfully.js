// Promessa retorna com sucesso

console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
	return resolve('carro chegou')
})

console.log('aguardando')

promessa.then(result => console.log(result))
