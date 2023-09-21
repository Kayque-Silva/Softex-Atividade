const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: "); //String
let salario = Number(prompt('Informe seu salário: ')); //Number
let idade = Number(prompt('Informe sua idade: ')); //Number
let possuiDiploma = prompt('Possui diploma? '); // String
let novoCadastro = {
    nome: nome,
    salario: salario,
    idade: idade,
    possuiDiploma: possuiDiploma
  };
  
  console.log(novoCadastro);
  