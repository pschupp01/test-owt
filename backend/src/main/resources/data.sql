
INSERT INTO boat (name, description) SELECT 'Titanic', 'A big boat'
    FROM dual
    WHERE NOT EXISTS (SELECT 1
    FROM boat
    WHERE name= 'Titanic');

INSERT INTO boat (name, description) SELECT 'Santa Maria', 'An old boat'
    FROM dual
    WHERE NOT EXISTS (SELECT 1
    FROM boat
    WHERE name= 'Santa Maria');

INSERT INTO boat (name, description) SELECT 'France', 'A classy boat'
    FROM dual
    WHERE NOT EXISTS (SELECT 1
    FROM boat
    WHERE name= 'France');

INSERT INTO user_info (username, password)
SELECT 'admin', '$2a$10$s515CmBbRNGa9o.z5Bel1eU1lbvhgoFf6eyWTUqMjGvK0GpfCxoNq'
  FROM dual
 WHERE NOT EXISTS (SELECT 1 
                     FROM user_info 
                    WHERE username = 'admin');