// Promessa retorna com sucesso

console.log('pedir uber') 
const promessa1 = new Promise((resolve, reject) => {
	return resolve('carro chegou')
})

console.log('aguardando')

promessa1.then(result => console.log(result))