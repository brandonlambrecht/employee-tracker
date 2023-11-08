INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales"),
       ("Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Finance Manager", 70,000, 2),
       ("Legal Assistant", 40,000, 3),
       ("Lead Engineer", 95,000, 1),
       ("Sales VP", 110,000, 4),
       ("Cyber Security Tech" 80,000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jon",  "Smith", 2,),
       ("Jack",  "Ross", 1,),
       ("Pam",  "Oliver", 3,),
       ("Brad",  "Johnson", 4,),
       ("Berry",  "Sanders", 5,);
