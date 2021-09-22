const express = require('express');

const router = express.Router();
const walletController = require('../controllers/wallet.controller');

router.post('/deposit', walletController.deposit);
// router.post('/transfer', walletController.transfer);
// router.get('/transactions', walletController.transactions);
// router.get('/balance', walletController.balance);

module.exports = router;
