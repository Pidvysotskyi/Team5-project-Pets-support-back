const { Pet } = require("../../models/index");

const addPet = async (req, res, next) => {
  const { _id } = req.user;

  const newPet = await Pet.create({ ...req.body, ref: _id });

  res.status(201).json(newPet);
};

module.exports = addPet;
