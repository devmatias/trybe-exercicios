SELECT * FROM customer;

SELECT active, COUNT(1) 
FROM customer
GROUP BY active;

SELECT active, store_id, COUNT(1) 
FROM customer
GROUP BY active, store_id;

SELECT * FROM film;

SELECT rating, AVG(length)
FROM film
GROUP BY rating;

SELECT * FROM address;

SELECT district, COUNT(1) AS quantidade
FROM address
GROUP BY district
ORDER BY quantidade DESC;

SELECT rating, AVG(length) AS media
FROM film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.5
ORDER BY media DESC; 

SELECT rating, SUM(replacement_cost) AS soma
FROM sakila.film
GROUP by rating
HAVING soma > 3950.50
ORDER BY soma;