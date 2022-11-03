DROP DATABASE IF EXISTS homework_db;

CREATE DATABASE homework_db;
USE homework_db;
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT
    -- FOREIGN KEY (department_id)
    -- REFERENCES departments(id)
    -- ON DELETE SET NULL

);
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
    -- FOREIGN KEY (role_id)
    -- REFERENCES roles(id)
    -- ON DELETE SET NULL
);
