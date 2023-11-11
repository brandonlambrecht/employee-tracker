INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales"),
       ("Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Finance Manager", 70000, 2),
       ("Legal Assistant", 40000, 3),
       ("Lead Engineer", 95000, 1),
       ("Sales VP", 110000, 4),
       ("Cyber Security Tech", 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jon",  "Smith", 2, NULL),
       ("Jack",  "Ross", 1, 1),
       ("Pam",  "Oliver", 3, NULL),
       ("Brad",  "Johnson", 4, NULL),
       ("Berry",  "Sanders", 5, 3);
