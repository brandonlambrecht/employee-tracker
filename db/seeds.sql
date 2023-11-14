INSERT INTO department (dep_name)
VALUES 
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES 
  ('Sales VP', 80000.00, 1),
  ('Lead Engineer', 60000.00, 2),
  ('Financial Analyst', 70000.00, 3),
  ('Marketing Coordinator', 55000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ('Michael', 'Jordan', 1, NULL),
  ('Emmitt', 'Smith', 2, 1),
  ('Julius', 'Erving', 3, 1),
  ('Kevin', 'Gates', 4, 2),
  ('Angel', 'Cabrera', 1, 3),
  ('Marion', 'Barber', 2, 3),
  ('Steph', 'Curry', 3, 4),
  ('Troy', 'Aikman', 4, 4);
        
