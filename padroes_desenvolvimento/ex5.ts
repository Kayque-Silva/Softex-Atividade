// Interface Strategy
interface OperacaoStrategy {
  execute(num1: number, num2: number): number;
}

// Classes concretas implementando a Strategy para Soma, Subtração e Multiplicação
class SomaStrategy implements OperacaoStrategy {
  execute(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class SubtracaoStrategy implements OperacaoStrategy {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class MultiplicacaoStrategy implements OperacaoStrategy {
  execute(num1: number, num2: number): number {
    return num1 * num2;
  }
}

// Contexto que utiliza a Strategy
class Calculadora {
  private estrategia: OperacaoStrategy | null = null;

  setEstrategia(estrategia: OperacaoStrategy): void {
    this.estrategia = estrategia;
  }

  calcular(num1: number, num2: number): number {
    if (this.estrategia) {
      return this.estrategia.execute(num1, num2);
    } else {
      throw new Error("Estratégia não definida. Defina uma estratégia antes de calcular.");
    }
  }
}

// Programa principal
const calculadora = new Calculadora();

// Receber entrada do usuário
const num1 = parseInt(prompt("Digite o primeiro número: ") || "0", 10);
const num2 = parseInt(prompt("Digite o segundo número: ") || "0", 10);
const operacao = prompt("Digite a operação (+, -, *): ");

// Definir a estratégia com base na operação informada
switch (operacao) {
  case "+":
    calculadora.setEstrategia(new SomaStrategy());
    break;
  case "-":
    calculadora.setEstrategia(new SubtracaoStrategy());
    break;
  case "*":
    calculadora.setEstrategia(new MultiplicacaoStrategy());
    break;
  default:
    console.log("Operação não suportada.");
    break;
}

// Calcular e imprimir o resultado
if (calculadora) {
  const resultado = calculadora.calcular(num1, num2);
  console.log(`Resultado da operação: ${resultado}`);
}
