--SELECT *(or select some if you dont want all) FROM table
--JOIN table
--ON table.id (pets.owner_id=owners.id)



-- SELECT departments.department_name AS Departments, roles.title AS Title
-- FROM roles
-- JOIN employees
-- ON employees.id = departments.id;



-- SELECT departments.department_name AS department, reviews.review
-- FROM reviews
-- LEFT JOIN movies
-- ON reviews.movie_id = movies.id
-- ORDER BY movies.movie_name;
