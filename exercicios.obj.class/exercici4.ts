// Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class funcionário{
nome:string
cargo:string
cpf:number

trabalho:string

constructor(nome:string, cargo:string , cpf:number, trabalho:string){

    this.nome= nome
    this.cargo= cargo
    this.cpf= cpf
     this.trabalho = trabalho

}
  informacaoFuncionario(){

    console.log(`Nosso funcionário ${this.nome} cujo cpf é ${this.cpf} ocupa o cargo de ${this.cargo} da qual executa a função de ${this.trabalho}`)
  }

}
let inf:funcionário= new funcionário ("Daniel","programador", 12278348944,"soluciona problemas")

inf.informacaoFuncionario()