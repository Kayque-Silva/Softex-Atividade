SELECT * FROM transacoes;


SELECT 
    ID_Transacao AS ID, 
    Data, 
    Valor 
FROM transacoes;


SELECT * FROM transacoes
WHERE Valor > 100.00;


SELECT * FROM transacoes
ORDER BY Valor DESC;


SELECT 
    AVG(Valor) AS Media,
    MAX(Valor) AS ValorMaximo,
    MIN(Valor) AS ValorMinimo,
    COUNT(*) AS TotalTransacoes
FROM transacoes;


SELECT 
    Produto, 
    AVG(Valor) AS MediaValorPorProduto
FROM transacoes
GROUP BY Produto;


SELECT 
    Categoria, 
    COUNT(*) AS QuantidadeTotal,
    SUM(Valor) AS ValorTotalVendas,
    AVG(Valor) AS MediaValorPorTransacao
FROM transacoes
GROUP BY Categoria;
