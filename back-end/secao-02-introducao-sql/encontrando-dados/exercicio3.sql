USE PiecesProviders;
SELECT * FROM Pieces;
SELECT * FROM Providers;
SELECT * FROM Provides;
SELECT pie.Name, pro.Price FROM Pieces pie, Provides pro 
WHERE pro.Provider = 'RBT' AND pro.Piece = pie.Code;
SELECT pie.Name, pro.Provider, pro.Price FROM Pieces pie, Provides pro 
WHERE pro.Piece = pie.Code
ORDER BY Price DESC
LIMIT 5;
SELECT pie.Name, pro.Provider, pro.Price FROM Pieces pie, Provides pro 
WHERE pro.Piece = pie.Code
ORDER BY Price DESC
LIMIT 5
OFFSET 3;
SELECT pie.Name AS Piece, pro.Provider, pros.Name AS 'Company Name', pro.Price FROM Pieces pie, Provides pro, Providers pros
WHERE pro.Provider = 'HAL' AND pros.Name = 'Clarke Enterprises' AND pro.Piece = pie.Code
ORDER BY Price DESC;
SELECT Code, Name, Provider, Price FROM Pieces pie, Provides pro
WHERE Code = 1 AND pro.Piece = Code
ORDER BY 1 DESC;