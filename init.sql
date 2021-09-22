DROP TABLE IF EXISTS users, wallets, transactions;

CREATE TABLE IF NOT EXISTS users (
	id	INT NOT NULL,
	password	VARCHAR(255) NOT NULL,
	first_name	VARCHAR(255) NOT NULL,
	last_name	VARCHAR(255) NOT NULL,
	phone_number	INT NOT NULL,
	address	VARCHAR(255),
	created_at	VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS wallets (
	account_number	INT NOT NULL,
	user_id	INT NOT NULL,
	balance	REAL,
	created_at VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
	id	INT NOT NULL,
	from_id	INT NOT NULL,
	to_id	INT NOT NULL,
	amount	REAL NOT NULL,
	operation	TEXT NOT NULL,
	created_at VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);
