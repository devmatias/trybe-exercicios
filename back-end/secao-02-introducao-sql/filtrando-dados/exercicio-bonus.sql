USE Scientists;

SELECT * 
FROM Scientists;

SELECT * 
FROM Scientists
WHERE Name
LIKE '%e%';

SELECT * 
FROM Projects
WHERE Code
LIKE 'A%'
ORDER BY Name;

SELECT * 
FROM Projects
WHERE Code
LIKE '%3%'
ORDER BY Name;

SELECT * 
FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

SELECT * 
FROM Projects
WHERE Hours > 500;

SELECT * 
FROM Projects
WHERE Hours
BETWEEN 251 AND 799;

SELECT Code, Name
FROM Projects
WHERE Name
NOT LIKE 'A%';

SELECT Name
FROM Projects
WHERE Code
LIKE '%h%';