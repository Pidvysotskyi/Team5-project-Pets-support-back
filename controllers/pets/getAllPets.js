const { Pet } = require("../../models/index");

const getAllPets = async (req, res, next) => {
  const { _id } = req.user;

  const allPets = await Pet.find({ ref: _id });

  res.status(201).json(allPets);
};

module.exports = getAllPets;
