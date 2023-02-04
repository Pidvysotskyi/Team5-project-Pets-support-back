const { Pet } = require("../../models/index");

const addPet = async (req, res, next) => {
  const newPet = await Pet.create(req.body);

  res.status(201).json(newPet);
};

module.exports = addPet;
