// 1. Uma função tradicional com a palavra reservada function e sem nenhum parâmetro.
function saudacao() {
    console.log('Olá mundo!');
  }
  
  saudacao();
  


// 2. Função tradicional com parametros e retornando um valor.
function somarNumeros(a, b) {
    const soma = a + b;
    return soma;
  }
  
  const resultadoSoma = somarNumeros(10, 19);
  
  console.log('A soma é:', resultadoSoma);



// 3. uma arrow function com parâmetros e que retorna um resultado.
const somar = (x, y) => x + y;


const resultado = somar(15, 4);

console.log('A soma é:', resultado);

  