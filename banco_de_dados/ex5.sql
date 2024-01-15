INSERT INTO Autores (Nome, Nacionalidade) VALUES 
('Maria Silva', 'Brasileira'),
('Henrik Jensen', 'Dinamarquesa'),
('Aisha Rahman', 'Paquistanesa');


INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES 
('Além do Horizonte', 2020, 1),
('A Chama da Revolução', 2018, 1),
('Estrelas Cintilantes', 2019, 2),
('Labirinto de Sombras', 2017, 3),
('Caminho para o Desconhecido', 2021, 3);


SELECT Autores.*, Livros.*
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;


SELECT Autores.*, Livros.*
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;


SELECT Autores.*, Livros.*
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Brasileira';


SELECT Autores.Nome, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;

