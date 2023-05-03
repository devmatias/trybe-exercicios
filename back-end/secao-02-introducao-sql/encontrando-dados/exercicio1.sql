USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 2019 AS ano, 20 AS dia, 12 AS mes;
SELECT 10+15;
SELECT 10/15;
SELECT * FROM Scientists;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;
SELECT Name AS 'Nome do projeto', Hours AS 'Tempo de trabalho' FROM Projects
ORDER BY 1;
SELECT Name AS 'Nome do projeto', Hours AS 'Tempo de trabalho' FROM Projects
ORDER BY 1 DESC;
SELECT Name AS 'Nome do projeto', Hours AS 'Tempo de trabalho' FROM Projects
ORDER BY 2 DESC LIMIT 3;
SELECT distinct * FROM AssignedTo;
SELECT * FROM Projects
ORDER BY 2 DESC LIMIT 1;
SELECT * FROM Projects
ORDER BY 3 DESC LIMIT 1 OFFSET 1;
SELECT * FROM Projects
ORDER BY 3 LIMIT 1 OFFSET 1;
SELECT * FROM Projects
ORDER BY 3 LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;