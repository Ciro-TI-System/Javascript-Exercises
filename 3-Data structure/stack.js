//Passo 1: Modelagem
//Step 1: Modeling
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }
  push(value) {
    this.top++
    this.data[this.top] = value
  }
  pop() {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }
  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

//Passo 2: Utilização
//Step 2: Usage
const stack = new Stack();

//Adicionar dados
//Add data
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack)

console.log(stack.peek())

//Remover dados
//Remove data
stack.pop()

console.log(stack.pop())

console.log(stack.peek())