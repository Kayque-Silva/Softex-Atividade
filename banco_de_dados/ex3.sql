-- Passo 1 inserindo três novos produtos
INSERT INTO Produtos (NomeProduto, Preco, QuantidadeEstoque)
VALUES 
    ('Smartphone', 799.99, 20),
    ('Tablet', 349.99, 10),
    ('Fone de Ouvido', 49.99, 50);

-- Passo 2 atualizar estoque e o preço do Smartphone
UPDATE Produtos
SET QuantidadeEstoque = 25, Preco = 849.99
WHERE NomeProduto = 'Smartphone';

-- Passo 3 simular a venda de cinco unidades do Tablet
UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 5
WHERE NomeProduto = 'Tablet';

-- Passo 4 simular a venda de dez unidades do Fone de Ouvido
UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 10
WHERE NomeProduto = 'Fone de Ouvido';


