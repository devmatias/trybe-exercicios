SELECT * FROM actor;
SELECT * FROM film_actor;

SELECT a.actor_id, CONCAT(a.first_name,' ', a.last_name), fa.film_id
FROM actor a
INNER JOIN film_actor fa
ON a.actor_id = fa.actor_id;

SELECT * FROM staff;
SELECT * FROM address;

SELECT s.first_name, s.last_name, a.address
FROM staff s
INNER JOIN address a
ON a.address_id = s.address_id;

SELECT * FROM customer;
SELECT * FROM address;

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS name, c.email, a.address_id, a.address
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
ORDER BY name DESC
LIMIT 100;

SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, a.address_id, a.address, a.district
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
AND a.district = 'California'
AND CONCAT(c.first_name, ' ', c.last_name) LIKE '%RENE%';

SELECT * FROM rental;

SELECT c.first_name, c.last_name, COUNT(rental_id) AS quantidade
FROM customer c
INNER JOIN rental r
ON c.customer_id = r.customer_id AND active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

SELECT * FROM payment;
SELECT * FROM staff;

SELECT s.first_name, s.last_name, AVG(p.amount) as average_amount
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id AND YEAR(payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT a.first_name, a.last_name, f.film_id, f.title
FROM actor a
INNER JOIN film_actor fa
INNER JOIN film f
ON f.film_id = fa.film_id AND a.actor_id = fa.actor_id;

SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;