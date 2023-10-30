
interface Computador {
    getRAM(): string;
    getHDD(): string;
    getCPU(): string;
    getType(): string;
    toString(): string;
  }
  

  abstract class FabricaComputador {
    abstract criarComputador(): Computador;
  }
  
  
  class PC implements Computador {
    constructor(private ram: string, private hdd: string, private cpu: string) {}
  
    getRAM(): string {
      return this.ram;
    }
  
    getHDD(): string {
      return this.hdd;
    }
  
    getCPU(): string {
      return this.cpu;
    }
  
    getType(): string {
      return "PC";
    }
  
    toString(): string {
      return `PC: RAM ${this.ram}GB, HDD ${this.hdd}GB, CPU ${this.cpu}GHz`;
    }
  }
  
  class Server implements Computador {
    constructor(private ram: string, private hdd: string, private cpu: string) {}
  
    getRAM(): string {
      return this.ram;
    }
  
    getHDD(): string {
      return this.hdd;
    }
  
    getCPU(): string {
      return this.cpu;
    }
  
    getType(): string {
      return "Server";
    }
  
    toString(): string {
      return `Server: RAM ${this.ram}GB, HDD ${this.hdd}GB, CPU ${this.cpu}GHz`;
    }
  }
  
  
  class FabricaPC extends FabricaComputador {
    criarComputador(): Computador {
      return new PC("8", "512", "2.4");
    }
  }
  
 
  class FabricaServer extends FabricaComputador {
    criarComputador(): Computador {
      return new Server("32", "1024", "3.0");
    }
  }
  

  const fabricaPC = new FabricaPC();
  const pc = fabricaPC.criarComputador();
  console.log(pc.toString());
  
  const fabricaServer = new FabricaServer();
  const server = fabricaServer.criarComputador();
  console.log(server.toString());
  