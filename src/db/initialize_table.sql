CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NULL
);


INSERT INTO users(email, firstname, last_name)
VALUES
('codeclod@gmail.com', 'Code', 'Clod'),
('jellyface@gmail.com', 'Jellyface', 'Espocia');
