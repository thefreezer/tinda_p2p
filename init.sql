DROP TABLE IF EXISTS users, wallets, transactions;

CREATE TABLE IF NOT EXISTS users (
	id	UUID NOT NULL,
	password	VARCHAR(255) NOT NULL,
	first_name	VARCHAR(255) NOT NULL,
	last_name	VARCHAR(255) NOT NULL,
	phone_number	INT NOT NULL,
	address	VARCHAR(50),
	account_number UUID NOT NULL,
	created_at	VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS wallets (
	account_number	UUID NOT NULL,
	balance	REAL,
	created_at VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
	id	UUID NOT NULL,
	from_id	UUID NOT NULL,
	to_id	UUID NOT NULL,
	amount	REAL NOT NULL,
	operation	VARCHAR(10) NOT NULL,
	created_at VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);
