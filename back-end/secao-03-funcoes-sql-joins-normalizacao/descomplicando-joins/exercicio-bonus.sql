SELECT * FROM movies;
SELECT * FROM theater;
SELECT * FROM box_office;

SELECT m.*, bo.rating
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id
WHERE m.theater_id IS NOT NULL
AND bo.rating > 8;