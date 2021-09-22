const db = require('./db');
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
  return data;

};

/**
 * Get user by phone_number
 * @param {ObjectId} phone number
 * @returns {Promise<User>}
 */
const getUserByPhoneNumber = async (phone_number) => {
  const query = `SELECT id, phone_number, password FROM users
    WHERE phone_number = $1`;

  const data = await db.query(query, [phone_number]);
  return data;

};


// TODO: add validation checks(phone_number)
/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const createUser = async (userData) => {
  // TODO: hash password
  const { phone_number, first_name, last_name, password } = userData;
  // password =  await bcrypt.hash(user.password, 8);
  const id = 2;
  const created_at = moment().format('YYYY-MM-DD hh:mm:ss');
  console.log(userData);

  const query = `
    INSERT INTO users(id, password, first_name, last_name, phone_number, created_at)
    VALUES ($1, $2, $3, $4, $5, $6)`;

  console.log([id, password, first_name, last_name, phone_number, created_at]);
  const res = await db.query(query, [id, password, first_name, last_name, phone_number, created_at]);
  console.log('user created:', res);
  return res;
};

module.exports = {
  getUserById,
  getUserByPhoneNumber,
  createUser,
}
