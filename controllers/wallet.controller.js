// const transactionService = require('../services');

const deposit = (req, res) => {
    const query = '';
    res.send({'msg':'deposit'});
}

const transfer = (req, res) => {
    const query = '';
    res.send({'msg':'transfer'});
}

const transactions = (req, res) => {
    const query = '';
    res.send({'msg':'transactions'});
}

const balance = (req, res) => {
    const query = '';
    res.send({'msg':'balance'});
}

module.exports = {
    deposit, 
    transfer, 
    transactions, 
    balance
}

// POST wallet/transfer to dest_acc_number

