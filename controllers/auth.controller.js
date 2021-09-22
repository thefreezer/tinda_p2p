const userService = require('../services/user.service');
const tokenService = require('../services/token.service');
const authService = require('../services/auth.service');

// TODO: should only be called by admin
// TODO: generateAuthTokens
// const register = async (req, res) => {
//   const user = await userService.createUser(req.body);
//   const tokens = await tokenService.generateAuthTokens(user);
//   res.json({user, tokens});
// }

const login = async (req, res) => {
  const { phone_number, password } = req.body;
  // TODO: validate user input
  const user = await authService.loginWithPhoneNumberAndPassword(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.json({ user, tokens });
}

module.exports = {
  // register,
  login,
}
