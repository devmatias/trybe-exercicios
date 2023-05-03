SELECT * FROM film;

SET SQL_SAFE_UPDATES = 0;

UPDATE actor SET first_name = 'Jules'
WHERE first_name = 'Julia';

UPDATE category SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

UPDATE film SET replacement_cost = 25.00
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;

UPDATE film 
SET replacement_cost = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
	END
);