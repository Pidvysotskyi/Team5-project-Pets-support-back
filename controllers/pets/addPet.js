const { Pet } = require("../../models/index");
const uploadImgInCloud = require("../../helpers/uploadImg");

const addPet = async (req, res, next) => {
  const { _id } = req.user;
  const { path } = req.file;

  const urlImg = (await uploadImgInCloud(path)).url;

  const newPet = await Pet.create({ ...req.body, urlAvatar: urlImg, ref: _id });

  res.status(201).json(newPet);
};

module.exports = addPet;
