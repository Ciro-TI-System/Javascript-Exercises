//Estrutural
//Structural
let altura = 50
let largura = 60

function calcularArea() {
  return altura * largura
}

let area = calcularArea()

//Orientada a Objetos
//Object Oriented

//Criamos a classe 'Poligono' e atribuímos a ela propriedades.
//Create the 'Polygon' class and assign it properties.
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  /*A função 'area' recebe esse objeto e executa o cálculo da área com a função 
  'calcularArea'.*/
  /* The 'area' function receives this object and performs the calculation of the area 
  with the function 'calculateArea'.*/
  get area() {
    return this.#calcularArea()
  }

  /*A função 'calcularArea' recebe o character '#' que realiza seu encapsulamento 
  de forma que fique visível apenas dentro da função.*/
  /* The 'calculateArea' function receives the character '#' that performs its 
  encapsulation so that it is visible only inside the function.*/
  #calcularArea() {
    return this.altura * this.largura
  }
}

/*Criando objeto da classe 'Poligono' e calculando a sua área chamando a função 'area', 
que por sua vez faz o cálculo da área com a função 'calculateArea' que não temos acesso
no console.log pois está encapsulada.*/
/*Creating object of class 'Polygon' and calculating its area calling the 'area' 
function, which in turn calculates the area with the 'calculateArea' function that we 
don't have access to in console.log as it is encapsulated.*/
let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(poligono.area)