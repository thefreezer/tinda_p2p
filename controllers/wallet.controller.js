const walletService = require('../services/wallet.service');

const deposit = async (req, res) => {
  const data = await walletService.postDeposit(req.user_id, req.body.amount, req.body.phone_number);
  res.send(data);
}

const transfer = async (req, res) => {
  const data = await walletService.postTransfer(req.user_id, req.body.amount, req.body.phone_number);
  res.send(data);
}

// returns all user activities
const transactions = async (req, res) => {
  const data = await walletService.getBalanceById(req.params.user_id);
  res.send(data);
}

// returns user total balance
const balance = async (req, res) => {
  const data = await walletService.getBalanceById(req.params.user_id);
  res.send(data);
}

module.exports = {
  deposit,
  transfer,
  transactions,
  balance
}

// POST wallet/transfer to dest_acc_number
