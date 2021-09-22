const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// router.post('/', userController.createUser); // TODO: restrict to admin
router.get('/:user_id', userController.getUser);
// router.get('/', userController.getAllUsers);
// router.patch('/:user_id', userController.updateUser);

// router.get('/:userId', userController.getUser);

module.exports = router;
