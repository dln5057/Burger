CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);


create database burgerDB;

use burgerDB;

create table burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL, 
PRIMARY KEY (id)
);