DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);
CREATE TABLE customer_orders (
    id INT NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers (id),
    order_details TEXT NOT NULL
);

