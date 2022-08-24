const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

//A indexação (index) começa pelo número 0
//The indexing starts with the number 0
console.log(pilotos[0]) //Senna
console.log(pilotos[3]) //Hamilton

//Acessar o tamanho do array
// Access array size
console.log(pilotos.length)

//iterável
//iterable
for (let piloto of pilotos) {
  console.log(piloto)
}

//Adicionar elementos
//Add elements
pilotos.push('Alonso')
console.log(pilotos)

//Encontrar um elemento
//Find an element
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

//Deletar um elemento
//Delete an element
pilotos.splice(1, 1)
console.log(pilotos)