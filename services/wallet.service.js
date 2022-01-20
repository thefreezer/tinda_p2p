const userService = require('./user.service');
const db = require('./db');
const moment = require('moment');

const { v4: uuidv4 } = require('uuid');

/**
* @param {uuid} id_from
* @param {real} amount
* @param {int} phone_number
 * @returns {Promise<User>}
 */
 // TODO: transfer to non-Tinda users
const postTransfer = async (id_from, amount, phone_number) => {

  // [x] generate uuid
  const transaction_id = uuidv4();

  // [x] check sufficient balance
  const user_from = await userService.getUserById(id_from); // user making the transfer
  let user_from_wallet = await getWalletByAccountNumber(user_from.account_number);
  if(user_from_wallet.balance == 0 || user_from_wallet.balance < amount)
    return 'Insufficient balance';

  // [x] update id_from wallet
  const query = `
    UPDATE wallets
    SET balance = $1
    WHERE account_number = $2`;

  let user_from_new_balance = user_from_wallet.balance - amount;
  await db.query(query, [user_from_new_balance, user_from.account_number]);

  // [x] update to_id wallet
  const user_to = await userService.getUserByPhoneNumber(phone_number);
  if(!user_to)
    return 'Other user\'s phone number not found.';

  let user_to_wallet = await getWalletByAccountNumber(user_to.account_number);
  let user_to_new_balance = user_to_wallet.balance + amount;

  await db.query(query, [user_to_new_balance, user_to.account_number]);

  // [x] save transaction
  const transaction_query = `
    INSERT INTO transactions(id, from_id, to_id, amount, operation, created_at)
    VALUES($1, $2, $3, $4, $5, $6)`;

  await db.query(transaction_query, [transaction_id, user_from.id, user_to.id, amount, 'T', moment().format('YYYY-MM-DD hh:mm:ss')]);

  const data = {msg: 'done'};
  return data;

};

/**
  * @param {uuid} depositor_id of user making deposit
  * @param {real} amount
  * @param {int} phone_number
 * @returns {Promise<Object>}
 */
 // TODO: add permission. only BY ADMIN
 // TODO: add error catchers
const postDeposit = async (depositor_id, amount, phone_number) => {

  const data = {done: 'yes'}
  // [x] generate uuid
  const transaction_id = uuidv4();


  // [x] check if user exits. Therefore wallet exists
  const other_user = await userService.getUserByPhoneNumber(phone_number);
  if(!other_user)
    return res('Other user not found!');

  // [x] update user wallet
  const query = `
    UPDATE wallets
    SET balance = $1
    WHERE account_number = $2`;

  const wallet = await getWalletByAccountNumber(other_user.account_number);
  const new_balance = wallet.balance + amount;

  await db.query(query, [new_balance, other_user.account_number]);

  // [x] save transaction
  const transaction_query = `
    INSERT INTO transactions
    VALUES($1, $2, $3, $4, $5, $6)`;

  await db.query(transaction_query, [transaction_id, depositor_id, other_user.id, amount, 'D', moment().format('YYYY-MM-DD hh:mm:ss')]);

  return data;

};

/**
 * @param {uuid} user_id
 * @returns {Promise<Object>}
 */
const getWalletTransactions = async (user_id) => {
  const query = `
    SELECT amount, operation, created_at FROM users, transactions
    WHERE transactions.from_id = $1 OR transactions.to_id = $1`;

  const data = await db.query(query, [user_id]);
  return data;
};

/**
 * Get wallet by account number
 * @param {uuid} account number
 * @returns {Promise<Wallet>}
 */
const getWalletByAccountNumber = async (account_number) => {
  const query = `
    SELECT * FROM wallets
    WHERE account_number = $1`;

  const data = await db.query(query, [account_number]);
  return data[0];
};

/**
 * Create new wallet
 * @returns {Promise<uuid>}
 */
const createWallet = async () => {
  const query = `
    INSERT INTO wallets
    VALUES ($1, $2, $3)`;

  const account_number = uuidv4();
  const created_at = moment().format('YYYY-MM-DD hh:mm:ss');

  await db.query(query, [account_number, 0, created_at]);
  return account_number;
};

module.exports = {
  postDeposit,
  postTransfer,
  getWalletTransactions,
  getWalletByAccountNumber,
  createWallet,
}
