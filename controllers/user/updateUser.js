const { User } = require("../../models/");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const updatedUser = await User.findByIdAndUpdate(_id, req.body, { new: true });

  res.json({
    message: "User has been updated",
    user: {
      _id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      city: updatedUser.city,
      birthday: updatedUser.birthday,
      phone: updatedUser.phone,
      avatarURL: updatedUser.avatarURL,
    },
  });
};

module.exports = updateUser;
