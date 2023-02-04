const { User } = require("../../models/");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const updatedUser = await User.findByIdAndUpdate(_id, req.body, { new: true });

  res.json({
    message: "User has been updated",
    data: {
      result: updatedUser,
    },
  });
};

module.exports = updateUser;
