const express = require('express');
const auth = require('../middlewares/auth');
const walletController = require('../controllers/wallet.controller');

const router = express.Router();

router.post('/transfer', auth, walletController.transfer);
router.post('/deposit', auth, walletController.deposit);
router.get('/transactions', auth, walletController.transactions);
router.get('/balance', auth, walletController.balance);

module.exports = router;
