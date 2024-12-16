CREATE DATABASE college;

USE college;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(30),
subject VARCHAR(30),
salary INT
);

INSERT INTO teacher
(id,name,subject,salary)
VALUES
(23,"ajay","math",50000),
(47,"bhart","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

SELECT * FROM teacher
WHERE salary >55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

UPDATE teacher
SET ctc = ctc + ctc * 0.25 ;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;


---------------------------------------------------------------------------------- 

CREATE TABLE student(
roll_no INT PRIMARY KEY,
name VARCHAR(30),
city VARCHAR(30),
marks INT
);

INSERT INTO student
(roll_no,name,city,marks)
VALUES
(110,"adam","delhi",50),
(108,"shubham","mumbai",60),
(124,"shivam","panjab",45),
(112,"aman","jaipur",75);

SELECT*FROM student;

SELECT*FROM student
WHERE MARKS > 40;

SELECT DISTINCT city 
FROM student;



SELECT city ,max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade ="O"
WHERE marks >= 45;

UPDATE student
SET grade ="A"
WHERE marks >= 50 AND marks < 70;

UPDATE student
SET grade ="B"
WHERE marks >= 70 AND marks < 50;


