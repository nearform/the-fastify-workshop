CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR (50) NOT NULL);

INSERT INTO users (username) VALUES ('alice'), ('bob');
