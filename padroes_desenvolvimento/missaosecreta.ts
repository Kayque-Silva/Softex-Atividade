class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhasegredo";
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia!;
    }
  
    acessarBaseSecreta(senhaDigitada: string): void {
      if (senhaDigitada === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Missão bem-sucedida!");
      } else {
        console.log("Acesso negado! Cuidado com as tentativas, agente.");
      }
    }
  }
