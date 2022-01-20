const db = require('./db');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const moment = require('moment');

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  const query = `
    SELECT * FROM users
    WHERE id = $1`;

  const data = await db.query(query, [id]);
  return data[0];

};

/**
 * Get user by phone_number
 * @param {int} phone_number
 * @returns {Promise<User>}
 */
const getUserByPhoneNumber = async (phone_number) => {
  const query = `
    SELECT * FROM users
    WHERE phone_number = $1`;

  const data = await db.query(query, [phone_number]);
  return data[0];
};


// TODO: add validation checks(phone_number)
/**
 * Get user by id
 * @param {Object} userData
 * @param {uuid} new_account_number
 * @returns {Promise<User>}
 */
const createUser = async (userData, new_account_number) => {
  const user = {
    id: uuidv4(),
    phone_number: userData.phone_number,
    first_name: userData.first_name,
    last_name: userData.last_name,
    password: bcrypt.hashSync(userData.password, 8),
    account_number: new_account_number,
    created_at: moment().format('YYYY-MM-DD hh:mm:ss'),
  }

  const query = `
    INSERT INTO users(id, password, first_name, last_name, phone_number, created_at, account_number)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

  // console.log([id, password, first_name, last_name, phone_number, created_at]);
  await db.query(query, [user.id, user.password, user.first_name, user.last_name, user.phone_number, user.created_at, user.account_number]);
  return user;
};


module.exports = {
  getUserById,
  getUserByPhoneNumber,
  createUser,
}
