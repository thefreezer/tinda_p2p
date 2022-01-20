const userService = require('./user.service');
const bcrypt = require('bcryptjs');

const loginWithPhoneNumberAndPassword = async (phone_number, password) => {
  const user = await userService.getUserByPhoneNumber(phone_number);

  if(!user || !bcrypt.compareSync(password, user.password))
    throw 'User not found';

  return user;
}

module.exports = {
  loginWithPhoneNumberAndPassword,
}
