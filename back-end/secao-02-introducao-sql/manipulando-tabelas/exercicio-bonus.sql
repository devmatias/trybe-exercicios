SELECT * FROM box_office;

UPDATE box_office SET rating = 9.0
WHERE domestic_sales > 400000000;

UPDATE box_office SET rating = 6.0
WHERE domestic_sales > 200000000
AND international_sales < 300000000;

SELECT * FROM movies;

SELECT * FROM movies
WHERE length_minutes < 100;

DELETE FROM box_office
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM movies
WHERE id IN (1, 6, 7, 8);