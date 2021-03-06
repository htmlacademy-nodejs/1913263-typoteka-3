DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles_categories CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL
);

ALTER TABLE users OWNER to artemnaganov;

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  announcement VARCHAR(255) NOT NULL,
  full_text TEXT,
  picture VARCHAR(255),
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

ALTER TABLE articles OWNER to artemnaganov;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL
);

ALTER TABLE categories OWNER to artemnaganov;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  user_id INTEGER NOT NULL ,
  article_id INTEGER NOT NULL ,
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (article_id) REFERENCES articles (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

ALTER TABLE comments OWNER to artemnaganov;

CREATE TABLE articles_categories (
  article_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  PRIMARY KEY (article_id, category_id),
  FOREIGN KEY (article_id) REFERENCES articles (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (category_id) REFERENCES comments (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

ALTER TABLE articles_categories OWNER to artemnaganov;

CREATE INDEX ON articles(title);
