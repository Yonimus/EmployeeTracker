INSERT INTO department (name)
VALUES ("Produce"),
       ("Beer"),
       ("Front End"),
       ("Deli");

INSERT INTO role (title, salary, department_id)
VALUES ("Produce Manager", 31000, 1),
       ("Produce Associate", 22800, 1),
       ("Beer Lead", 32000, 2),
       ("Beer Associate", 22800, 2),
       ("Front End Manager", 31000, 3),
       ("Sales Associate", 22800, 3),
       ("Deli Manager", 35036, 4),
       ("Deli Associate", 24960, 4);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES ("Mecklenburg", "Johann", 1, 1),
       ("Gatherty", "Kyle", 2, NULL),
       ("Ehrmantraut", "Michael", 3, NULL),
       ("Daniels", "Ophelia", 4, 4);