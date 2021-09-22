//SERVICE
/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};


// CONTROLLER
const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});


.get/post are asynchronous functions. They take a while to complete
.you give them callbacks which is run when function is completed

function get('route', callback){
  do your thing here
  get everything you need
  then
  callback(req, res)
}

get('given route', (req, res) => {
  
})
