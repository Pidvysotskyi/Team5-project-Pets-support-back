const { User } = require("../../models");
const fs = require("fs/promises");
const uploadImg = require("../../helpers/uploadImg");

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
    console.log(uploadImg);
    const { url: avatarURL, secure_url } = await uploadImg(tempUpload);

    console.log(avatarURL);

    await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
    await fs.unlink(tempUpload);
    next();
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
