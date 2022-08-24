//Passo 1: Modelagem
//Step 1: Modeling
class Queue {
  constructor() {
    this.data = []
  }
  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila!`)
  }
  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

//Passo 2: Utilização
//Step 2: Usage
const queue = new Queue()

//Adicionar dados
//Add data
queue.enqueue('Mariana')
queue.enqueue('Joanna')
queue.enqueue('Ariel')

//Remover dados
//Remove data
queue.dequeue('')
queue.dequeue('')
queue.dequeue('')
//Se não houver dados retorna 'undefined'
//If there is no data, return 'undefined'
queue.dequeue('')