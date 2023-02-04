const { User } = require("../../models");
const jwt = require("jsonwebtoken");

const getUser = async (req, res, next) => {
  const [Bearer, token] = req.headers.authorization.split(" ");

  const { id } = jwt.decode(token);

  const user = await User.findById(id);

  res.status(200).json(user);
};

module.exports = getUser;
