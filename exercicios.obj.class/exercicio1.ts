

class Cliente{
    genero: string
    idade: number
    nome: string 
    
    
     constructor(genero:string, idade:number, nome:string){
      this.genero = genero
      this.idade = idade
      this.nome  = nome
    }
    
    mostrarInformacao():void{
    
        console.log("Nome : "+this.nome+", sua idade é: "+this.idade+" seu gênero é: "+this.genero)
    }
    }
    
    let i: Cliente = new Cliente ("feminino",25,"Laryssa")
    
    i.mostrarInformacao();