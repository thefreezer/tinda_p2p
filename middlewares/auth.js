const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next) => {
  let token =
    req.headers['authorization'] || req.body.token || req.headers["x-access-token"];

  if(!token){
    return res.status(403).send('Token required for authentification');
  }

  try {
    // TODO: check if token is Bearer
    // spliting Bearer token
    if(req.headers['authorization'])
      token = token.substring(7);
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user_id = decoded.sub; // user.id
  } catch(err){
    return res.status(401).send("Invalid token");
  }
  return next();
}

module.exports = verifyToken;
