const db = require('./db');

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const postTransfer = async (id) => {
  const q_T = `
    INSERT INTO transactions
    VALUES (id, from_id, to_id, amount, 'T')`;

  const data = await db.query(query, [id]);
  return data;

};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const postDeposit = async (id) => {
  const q_T = `
    INSERT INTO transactions
    VALUES (id, from_id, to_id, amount, 'D')`;

  const data = await db.query(query, [id]);
  return data;

};


/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getWalletBalance = async (id) => {
  const query = `
    SELECT * FROM users
    WHERE id = $1`;

  const data = await db.query(query, [id]);
  return data;
};


/**
 * Get balance of user
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getWalletTransactions = async (id) => {
  const query = `
    SELECT balance FROM wallets, users
    WHERE wallets.user_id = $1`;

  const data = await db.query(query, [id]);
  return data;

};

module.exports = {
  getWalletBalance,
  getWalletTransactions,
  postDeposit,
  postTransfer,
}
