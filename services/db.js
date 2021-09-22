const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 */

async function query(query, params) {
  const {rows, fields} = await pool.query(query, params);
  return rows;
}

// TODO: export query function
module.exports = { query }
