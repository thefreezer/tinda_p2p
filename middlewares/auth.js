const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if(!token){
    return res.status(403).send('Token required for authentification');
  }

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
  } catch(err){
    return res.status(401).send("Invalid token");
  }
  return next();
}

module.exports = verifyToken;
