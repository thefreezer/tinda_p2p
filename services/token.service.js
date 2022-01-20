const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config')

/**
 * Generate token
 * @param {ObjectId} user_id
 * @param {Moment} expires
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (id, expires, secret = config.jwt.secret) => {
  console.log('user_id', id)
  const payload = {
    sub: id,
    // iat: moment().unix(),
    // exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

/**
 * Generate auth tokens
 * @param {Object} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
  // const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessTokenExpires = 10;
  const accessToken = generateToken(user.id, accessTokenExpires);

  // const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshTokenExpires = 10;
  const refreshToken = generateToken(user.id, refreshTokenExpires);
  // await saveToken(refreshToken, user.id, refreshTokenExpires, 'refresh');

  return {
    access: {
      token: accessToken,
      // expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      // expires: refreshTokenExpires.toDate(),
    },
  };
};

module.exports = {
  generateToken,
  generateAuthTokens,
}
