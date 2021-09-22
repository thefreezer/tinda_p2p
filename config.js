require('dotenv').config();
const config = {
  db: {
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.JWT,
  }
}
// const isProduction = process.env.NODE_ENV === 'production';
//
// // set up for Heroku
// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
//
// const pool = new Pool({
//   connectionString: connectionString,
//   ssl: isProduction,
// });

module.exports = config;
