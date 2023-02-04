const { Pet } = require("../../models/index");
const removePet = async (req, res, next) => {
  await Pet.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "OK",
    message: "Succssesful",
  });
};

module.exports = removePet;
