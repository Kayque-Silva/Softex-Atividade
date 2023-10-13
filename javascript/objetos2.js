
class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.velocidade = 0;
    }
  
    acelerar() {
      this.velocidade += 10;
      console.log(`Acelerando. Velocidade atual: ${this.velocidade} km/h`);
    }
  
    frear() {
      this.velocidade -= 5;
      console.log(`Freando. Velocidade atual: ${this.velocidade} km/h`);
    }
  
    ligar() {
      console.log(`${this.modelo} ligado.`);
    }
  }
  
  
  const meuCarro = new Carro('Fusca', 'Azul');
  meuCarro.ligar();
  meuCarro.acelerar();
  meuCarro.frear();
  
 
  class Livro {
    constructor(titulo, autor, numPaginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
      this.aberto = false;
    }
  
    abrir() {
      this.aberto = true;
      console.log(`${this.titulo} aberto. Boa leitura!`);
    }
  
    fechar() {
      this.aberto = false;
      console.log(`${this.titulo} fechado.`);
    }
  
    ler() {
      console.log(`Lendo ${this.titulo} de ${this.autor}.`);
    }
  }
  
  
  const meuLivro = new Livro('Caramelo o Pesadelo dos Motoka', 'Jrogin do Grau', 300);
  meuLivro.abrir();
  meuLivro.ler();
  meuLivro.fechar();
  
  
  class ContaBancaria {
    constructor(numeroConta, saldo, titular) {
      this.numeroConta = numeroConta;
      this.saldo = saldo;
      this.titular = titular;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual: R$${this.saldo}`);
    }
  }
  
  
  const minhaConta = new ContaBancaria(12345, 1000, 'João');
  minhaConta.consultarSaldo();
  minhaConta.depositar(500);
  minhaConta.sacar(200);
  
  
  class Usuario {
    constructor(nomeUsuario, email, nivelAcesso) {
      this.nomeUsuario = nomeUsuario;
      this.email = email;
      this.nivelAcesso = nivelAcesso;
    }
  
    fazerLogin() {
      console.log(`${this.nomeUsuario} fez login.`);
    }
  
    fazerLogout() {
      console.log(`${this.nomeUsuario} fez logout.`);
    }
  
    alterarSenha(novaSenha) {
      console.log(`${this.nomeUsuario} alterou a senha para ${novaSenha}.`);
    }
  }
  
 
  const meuUsuario = new Usuario('desempregado', 'user@example.com', 'admin');
  meuUsuario.fazerLogin();
  meuUsuario.alterarSenha('trabalhandosedeusquiser');
  meuUsuario.fazerLogout();
  