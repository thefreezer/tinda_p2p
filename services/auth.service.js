const userService = require('./user.service');

const loginWithPhoneNumberAndPassword = async (userData) => {
  const { phone_number, password } = userData;

  const user = await userService.getUserByPhoneNumber(phone_number);

  return user;
}

module.exports = {
  loginWithPhoneNumberAndPassword,
}
