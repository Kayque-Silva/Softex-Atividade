
interface Observer {
    update(): void;
  }
  
 
  interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }
  
  
  class Editor implements Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  
  class TextEditor extends Editor {
    private lines: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.lines.splice(lineNumber - 1, 0, text);
      this.notifyObservers();
    }
  
    removeLine(lineNumber: number): void {
      this.lines.splice(lineNumber - 1, 1);
      this.notifyObservers();
    }
  
    getLines(): string[] {
      return [...this.lines];
    }
  
    open(): void {
      this.notifyObservers(); 
    }
  
    save(): void {
      this.notifyObservers(); 
    }
  }
  

  class ConsoleObserver implements Observer {
    private textEditor: TextEditor;
  
    constructor(textEditor: TextEditor) {
      this.textEditor = textEditor;
      this.textEditor.addObserver(this);
    }
  
    update(): void {
      this.displayText();
    }
  
    private displayText(): void {
      console.log("Conteúdo do Editor:");
      console.log(this.textEditor.getLines().join("\n"));
      console.log("---------------");
    }
  }
  
  
  const textEditor = new TextEditor();
  const consoleObserver = new ConsoleObserver(textEditor);
  
  console.log("Digite as linhas de texto. Digite 'EOF' para finalizar.");
  
  let lineNumber = 1;
  while (true) {
    const input = prompt(`Linha ${lineNumber}: `);
    if (input && input.toLowerCase() === "eof") {
      break;
    }
  
    textEditor.insertLine(lineNumber, input || "");
    lineNumber++;
  }
  
  textEditor.save();
  