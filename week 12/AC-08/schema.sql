DROP DATABASE IF EXISTS production_db;
CREATE DATABASE production_db;

USE production_db;
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NULL,
    in_stock BOOLEAN DEFAULT FALSE NULL
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(30) NOT NULL
);

