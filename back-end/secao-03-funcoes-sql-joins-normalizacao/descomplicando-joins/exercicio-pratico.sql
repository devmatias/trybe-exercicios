SELECT * FROM movies;
SELECT * FROM theater;
SELECT * FROM box_office;

SELECT m.*, bo.domestic_sales, bo.international_sales
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id;

SELECT m.*, (bo.domestic_sales + bo.international_sales) AS "Vendas"
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

SELECT m.*, bo.rating
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

SELECT m.*, t.name, t.location
FROM movies m
LEFT JOIN theater t
ON m.theater_id = t.id
ORDER BY t.name;

SELECT m.*, t.name, t.location
FROM movies m
RIGHT JOIN theater t
ON m.theater_id = t.id
ORDER BY t.name;