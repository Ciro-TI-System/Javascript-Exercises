//Definição
class Parafuso { //Super classe - Abstrata
  constructor() {
    if (this.constructor === Parafuso)
      throw new Error('Classe abstrata não pode ser instanciada');
  }
  get tipo() {
    throw new Error("Método 'get tipo()' precisa ser implementado.");
  }
}

  //Criação de classe
  class Fenda extends Parafuso{ //Criada a partir da classe 'Parafuso'.
    constructor() 
    {super()} //Herda todos os atributos da super classe.

    get tipo(){
      return 'fenda'
    }
  }
    class Philips extends Parafuso{ //Criada a partir da classe 'Parafuso'.
      constructor() 
      {super()} //Herda todos os atributos da super classe.
  
      get tipo(){
        return 'philips'
      }    
  }
  class Allen extends Parafuso{} //Classe sem implementação.

//Criar e usar
//let parafuso = new Parafuso() //Classe abstrata não pode ser instanciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

//Visualizando as classes
console.log(fenda.tipo, philips.tipo)
//console.log(allen.tipo) //Método 'get tipo()' precisa ser implementado.