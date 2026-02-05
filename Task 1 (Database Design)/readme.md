Design database schema for a personal library system
● Tables: Users, Books, Categories, BookCategories (many-to-many)
● Include proper data types, constraints, relationships
● Provide ER diagram and SQL DDL scripts
● Evaluation: Schema normalization, relationship understanding, constraint usage


CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    published_year INT 
);

CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE BookCategories (
    book_id INT NOT NULL REFERENCES Books(id) ON DELETE CASCADE,
    category_id INT NOT NULL REFERENCES Categories(id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, category_id)
);


@prisma/client cors dotenv
npx prisma init



"postgresql://postgres:admin@localhost:5432/db_name"