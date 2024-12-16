CREATE DATABASE school;

use school;




 CREATE TABLE user (
 id INT,
 age INT,
 name VARCHAR(30)  NOT NULL, 
 email VARCHAR(50) UNIQUE,
 followers INT DEFAULT 0,
 following INT,
 CONSTRAINT age_check CHECK (age>=13),
 PRIMARY KEY (ID)
 );
 

 
 INSERT INTO user
 (id, age, name, email, followers, following)
 VALUES
 (1, 14, "ankit", "ankit@email.in", 123, 145),
(2, 15, "boy", "boy@ygmail.com", 200, 200);

SELECT name,age,followers
FROM user
WHERE age>13
LIMIT 2;




 CREATE TABLE post (
 id INT PRIMARY KEY,
 content VARCHAR(100),
 user_id INT,
   FOREIGN KEY (user_id) REFERENCES user(id)


 );
 
 
 
