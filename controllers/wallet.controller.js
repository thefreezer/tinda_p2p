// const transactionService = require('../services');

const deposit = (req, res) => {
  const q_T = `
    INSERT INTO transactions
    VALUES (id, from_id, to_id, amount, 'D')`;

  // TODO: update user's wallet

  res.send({'msg':'deposit'});
}

//
const transfer = (req, res) => {

  // insert new transaction
  const q_T = `
    INSERT INTO transactions
    VALUES (id, from_id, to_id, amount, 'T')`;

  // TODO: update balance of user's wallet

  res.send({'msg':'transfer'});
}

// returns all user activities
const transactions = (req, res) => {
  const query = `
    SELECT amount, operation, created_at FROM users, transactions
    WHERE transactions.from_id = users.id OR transactions.to_id = users.id`;
  res.send({'msg':'transactions'});
}

// returns user total balance
const balance = (req, res) => {
  const query = `
    SELECT balance FROM wallets, users
    WHERE wallets.user_id = users.id`;
  res.send({'msg':'balance'});
}

module.exports = {
  deposit,
  transfer,
  transactions,
  balance
}

// POST wallet/transfer to dest_acc_number
