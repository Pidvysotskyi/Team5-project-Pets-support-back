const { User, Pet } = require("../../models");

const getUser = async (req, res, next) => {
  const { _id: id } = req.user;

  const user = await User.findById(id);

  const allPets = await Pet.find({ ref: id });

  res.status(200).json({ user, data: allPets });
};

module.exports = getUser;
