const userService = require('../services/user.service');

const createUser = (req, res) => {
}

const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.user_id);
  res.send(user);
};

const getAllUsers = (req, res) => {
};


const updateUser = (req, res) => {
}


const deleteUser = (req, res) => {
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
}
