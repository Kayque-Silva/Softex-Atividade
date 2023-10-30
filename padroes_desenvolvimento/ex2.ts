abstract class Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroRodas: number
    ) {}
  
    abstract clone(): Veiculo;
    abstract represent(): string;
  }
  
  class Carro extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      public numeroRodas: number,
      public numeroPortas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Veiculo {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent(): string {
      return `Carro: Modelo ${this.modelo}, Marca ${this.marca}, Cor ${this.cor}, Rodas ${this.numeroRodas}, Portas ${this.numeroPortas}`;
    }
  }
  
  class Moto extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      public numeroRodas: number,
      public cilindradas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Veiculo {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    represent(): string {
      return `Moto: Modelo ${this.modelo}, Marca ${this.marca}, Cor ${this.cor}, Rodas ${this.numeroRodas}, Cilindradas ${this.cilindradas}`;
    }
  }
  
  class Aplicacao {
    criarVeiculos(): Veiculo[] {
      const veiculos: Veiculo[] = [];
  
      veiculos.push(new Carro("Sedan", "Toyota", "Azul", 4, 4));
      veiculos.push(new Carro("SUV", "Honda", "Preto", 4, 2));
      veiculos.push(new Moto("Esportiva", "Yamaha", "Vermelha", 2, 1000));
      veiculos.push(new Moto("Cruiser", "Harley-Davidson", "Preto", 2, 1200));
      veiculos.push(new Carro("Compacto", "Ford", "Prata", 4, 2));
      veiculos.push(new Moto("Custom", "Ducati", "Amarela", 2, 800));
  
      return veiculos;
    }
  
    clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
      const clones: Veiculo[] = [];
  
      veiculos.forEach(veiculo => {
        clones.push(veiculo.clone());
      });
  
      return clones;
    }
  
    imprimirRepresentacao(veiculos: Veiculo[]): void {
      veiculos.forEach(veiculo => {
        console.log(veiculo.represent());
      });
    }
  }
  
  const aplicacao = new Aplicacao();
  
  const veiculosOriginais = aplicacao.criarVeiculos();
  const veiculosClonados = aplicacao.clonarVeiculos(veiculosOriginais);
  
  aplicacao.imprimirRepresentacao(veiculosClonados);
  