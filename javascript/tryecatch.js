const prompt = require('prompt-sync')();
try {
    let num1 = parseFloat(prompt('Digite um número: '));
    let num2 = parseFloat(prompt('Digite outro número: '));
    resultado = num1 / num2;
    console.log(`O resultado da divisão entre os números é: ${resultado}`)
} catch (error) {
    console.log('Erro:', error.message );
} finally {
    console.log('Bloco "finally" sempre será executado.');
}