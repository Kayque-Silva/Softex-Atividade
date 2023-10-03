const prompt =require("prompt-sync")();



class Calculadora{
    
    adicao(numero1, numero2){
        const soma = numero1 + numero2;
        console.log(soma);
    }
    subtracao(numero1, numero2){
        const subtracao = numero1 - numero2;
        console.log(subtracao);
    }
    multiplicacao(numero1, numero2){
        const multiplicacao = numero1 * numero2;
        console.log(multiplicacao);
    }
    divisao(numero1, numero2){
        const divisao = numero1 / numero2;
        console.log(divisao);
    }
}



const Calculadora1 = new Calculadora();

let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite o outro número: "));
let operador = prompt("Informe o operador: +, -, *, / : ");

switch (operador) {
    case "+":
        Calculadora1.adicao(numero1, numero2)        
        break;
        case "-":
        Calculadora1.subtracao(numero1, numero2)        
        break;
        case "*":
        Calculadora1.multiplicacao(numero1, numero2)        
        break;
        case "/":
        Calculadora1.divisao(numero1, numero2)        
        break;

    default:
        break;
}