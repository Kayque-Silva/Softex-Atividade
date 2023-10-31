interface Sanduiche {
    custo(): number;
    descricao(): string;
}

class FrangoAssado implements Sanduiche {
    custo(): number {
        return 4.5;
    }

    descricao(): string {
        return "Sanduiche de Frango Assado";
    }
}

abstract class Decorator implements Sanduiche {
    protected sanduicheDecorado: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduicheDecorado = sanduiche;
    }

    custo(): number {
        return this.sanduicheDecorado.custo();
    }
    
    descricao(): string {
        return this.sanduicheDecorado.descricao();
    }
}

class Pepperoni extends Decorator {
    custo(): number {
        return this.sanduicheDecorado.custo() + 0.99;
    }

    descricao(): string {
        return `${this.sanduicheDecorado.descricao()}, Pepperoni`;
    }
}

class QueijoMussarelaRalado extends Decorator {
    custo(): number {
        return this.sanduicheDecorado.custo() + 2.0;
    }

    descricao(): string {
        return `${this.sanduicheDecorado.descricao()}, Queijo Mussarela Ralado`;
    }
}

const sanduicheBase: Sanduiche = new FrangoAssado();
const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(sanduicheBase));

console.log(`${sanduicheDecorado.descricao()} custa $${sanduicheDecorado.custo().toFixed(2)}.`);