
class Pato {
    voar(): void {
      console.log("Pato voando!");
    }
  
    emitirSom(): void {
      console.log("Quack! Quack!");
    }
  }
  
  interface Galinha {
    voar(): void;
    cacarejar(): void;
  }
  
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    voar(): void {
      this.pato.voar();
    }
  
    cacarejar(): void {
      this.pato.emitirSom();
    }
  }
  
  class AdaptadorPatoDemo {
    static demonstrar(): void {
      const pato = new Pato();
      const adaptador = new AdaptadorPato(pato);
  
      console.log("Pato comum:");
      pato.voar();
      pato.emitirSom();
  
      console.log("\nAdaptador para Galinha:");
      adaptador.voar();
      adaptador.cacarejar();
    }
  }
  
 
  AdaptadorPatoDemo.demonstrar();
  