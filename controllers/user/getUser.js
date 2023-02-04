const { User } = require("../../models");

const getUser = async (req, res, next) => {
  const { _id: id } = req.user;

  const user = await User.findById(id);

  res.status(200).json(user);
};

module.exports = getUser;
