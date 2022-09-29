function imprimirData(data) {
	console.log('outras tarefas')
	console.log(data())
}

imprimirData(function () {
	return 'Olá Mundo'
})