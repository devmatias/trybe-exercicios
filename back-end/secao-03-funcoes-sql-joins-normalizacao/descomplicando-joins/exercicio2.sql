SELECT * FROM employees;

SELECT CONCAT(e.first_name,' ', e.last_name) AS "Nome Pessoa Colaboradora", CONCAT(m.first_name, " ", m.last_name) AS "Nome Gerente"
FROM employees e
INNER JOIN employees m
ON m.employee_id = e.manager_id
WHERE e.department_id <> m.department_id;

SELECT m.first_name, m.last_name, COUNT(1) AS 'quantidade_subordinados'
FROM employees e
INNER JOIN employees m
ON m.employee_id = e.manager_id
GROUP BY m.first_name, m.last_name;