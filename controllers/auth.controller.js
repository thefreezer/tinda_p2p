const userService = require('../services/user.service');
const tokenService = require('../services/token.service');
const authService = require('../services/auth.service');
const walletService = require('../services/wallet.service');

// TODO: should only be called by admin
const register = async (req, res) => {
  const new_account_number  = await walletService.createWallet(); // avoiding circular depency
  const user = await userService.createUser(req.body, new_account_number);
  const tokens = await tokenService.generateAuthTokens(user);
  res.json({user, tokens});
}

// TODO: validate user input
const login = async (req, res) => {
  const { phone_number, password } = req.body;
  const user = await authService.loginWithPhoneNumberAndPassword(phone_number, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.json({ user, tokens });
}

module.exports = {
  register,
  login,
}
