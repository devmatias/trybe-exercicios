SELECT * FROM employees;

SELECT first_name, last_name, MAX(salary) 
FROM employees;

SELECT MAX(salary) - MIN(salary)
FROM employees;

SELECT job_id, AVG(salary) AS media
FROM employees
GROUP BY job_id
ORDER BY media DESC;

SELECT SUM(salary) FROM employees;

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2)
FROM employees;

SELECT job_id, SUM(salary) AS soma
FROM employees
GROUP BY job_id;

SELECT COUNT(1) total_it_prog
FROM employees
WHERE job_id = 'IT_PROG';

SELECT job_id, SUM(salary) AS soma
FROM employees
WHERE job_id = 'IT_PROG'
GROUP BY job_id;

SELECT job_id, AVG(salary) AS media
FROM employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY media;

SELECT department_id, AVG(salary) AS media, COUNT(1) AS quantidade
FROM employees
GROUP BY department_id
HAVING quantidade > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;
SELECT employee_id, first_name, DAY(hire_date) FROM employees;
SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

SELECT UPPER(CONCAT(first_name, " ", last_name)) FROM employees;

SELECT last_name, hire_date FROM employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

SELECT first_name, last_name, DATEDIFF(hire_date, NOW()) FROM employees;
