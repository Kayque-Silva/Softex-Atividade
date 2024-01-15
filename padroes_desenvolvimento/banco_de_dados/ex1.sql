
CREATE TABLE Livro (
    ISBN VARCHAR(50) PRIMARY KEY,
    Titulo VARCHAR(255),
    AnoPublicacao INT,
    Genero VARCHAR(100)
);

CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    Nome VARCHAR(255),
    DataNascimento DATE
);

CREATE TABLE Usuario (
    UserID INT PRIMARY KEY,
    Nome VARCHAR(255),
    Endereco VARCHAR(255),
    Email VARCHAR(255)
);

CREATE TABLE Emprestimo (
    EmprestimoID INT PRIMARY KEY,
    DataEmprestimo DATE,
    DataDevolucaoPrevista DATE,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Usuario(UserID)
);


CREATE TABLE Livro_Emprestimo (
    ISBN VARCHAR(50),
    EmprestimoID INT,
    PRIMARY KEY (ISBN, EmprestimoID),
    FOREIGN KEY (ISBN) REFERENCES Livro(ISBN),
    FOREIGN KEY (EmprestimoID) REFERENCES Emprestimo(EmprestimoID)
);


CREATE TABLE Devolucao (
    DevolucaoID INT PRIMARY KEY,
    DataDevolucao DATE,
    Multa DECIMAL,
    EmprestimoID INT,
    FOREIGN KEY (EmprestimoID) REFERENCES Emprestimo(EmprestimoID)
);
