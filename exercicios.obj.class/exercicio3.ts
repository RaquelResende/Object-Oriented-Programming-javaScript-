// Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.


class produtoEletronico {

    nome: string
    marca: string
    preço: number

    contato:string
    foto:string

constructor(nome:string, marca:string, preço:number, contato:string, foto:string){

this.nome = nome
this.marca = marca
this.preço = preço 
this.contato= contato
this.foto= foto

}


informacao():void{

console.log(`Que LOUCURAAA!! O ${this.nome} da marca ${this.marca} está com preço de ${this.preço.toFixed(2)}. Ele faz ${this.contato} e com ${this.foto} de alta qualidade`)
}
}

let p: produtoEletronico= new produtoEletronico("celular","Iphone", 10.000,"ligação", "imagens" )

p.informacao() 