CREATE DATABASE BlogDB;


CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    NomeAutor VARCHAR(255),
    Email VARCHAR(255)
);


CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    Titulo VARCHAR(255),
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);


CREATE TABLE Comentario (
    ComentarioID INT PRIMARY KEY,
    TextoComentario TEXT,
    DataComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);
