INSERT INTO departments (id, department_name)
VALUES
    ( 001, "physics"),
    ( 002, "astronomy"),
    ( 003, "chemistry");

INSERT INTO roles (id, title, department, salary, department_id)
VALUES
    ( 001, "teacher", "physics", 75000, 44),
    ( 002, "teacher", "astronomy", 75000, 55),
    ( 003, "teacher", "chemistry", 75000, 66);

INSERT INTO employees (id, first_name, last_name, job_title, role_id, manager_id)
VALUES
    ( 001, "john", "smith", "teacher", 111, 12),
    ( 002, "sally", "salt", "teacher", 222, 12),
    ( 003, "jill", "jacobs", "teacher", 333, 12);

