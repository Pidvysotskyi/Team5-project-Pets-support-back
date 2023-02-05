const { User } = require("../../models");
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  console.log(req.file);
  const { path: tempUpload } = req.file;
  console.log(tempUpload, "Temp dir");
  const { _id } = req.user;
  console.log(_id, "Users Id");
  try {
    const result = await cloudinary.uploader.upload(tempUpload);
    console.log(result, "отриманий результат");
    const { url: avatarURL, secure_url } = result;

    console.log(avatarURL, "отриманий аватар");

    await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
    await fs.unlink(tempUpload);
    next();
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
