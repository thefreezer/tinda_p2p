# Introduction
Service-oriented experimental backend for a digital walltet

## How to run
Clone directory and install dependencies
```
git clone https://github.com/thefreezer/tinda_p2p
cd tinda_p2p
npm install
```
Initialize database  
```
sqlite3 db.sqlite < init.sql`
```

Create .env file with the following structure
```
DB_USER=user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tinda_db
JWT=ilikechickenwings
```

Run program
```
node index.js
```

# Stack
- Nodejs/Express
- SQLite3
