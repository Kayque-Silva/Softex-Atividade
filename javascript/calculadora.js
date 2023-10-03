const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let media = (nota1 + nota2 + nota3) / 3;
console.log(`A média do aluno é ${media.toFixed(1)}`);