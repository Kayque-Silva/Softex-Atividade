function Banco(conta, saldo, tipo_conta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo_conta = tipo_conta;
    this.agencia = agencia;

    this.buscarSaldo = function() {
        return this.saldo;
    };

    this.deposito = function(valor) {
        this.saldo += valor;
        return `Depósito de R$ ${valor} reais realizado. Novo saldo: R$ ${this.saldo}`;
    };

    this.saque = function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$ ${valor} reais realizado. Novo saldo: R$ ${this.saldo}`;
        } else {
            return "Saldo insuficiente para saque.";
        }
    };

    this.numeroConta = function() {
        return this.conta;
    };
}

let minhaConta = new Banco(3454, 100, "Conta corrente", 1551);

console.log(`Meu saldo é de R$ ${minhaConta.buscarSaldo()} reais`);
console.log(`${minhaConta.deposito(50)}`);
console.log(`${minhaConta.saque(30)}`);
console.log(`Número da conta: ${minhaConta.numeroConta()}`);
