const cloudinary = require("cloudinary").v2;

const uploadImg = async avatarPath => {
  try {
    const result = await cloudinary.uploader.upload(avatarPath);

    return {
      url: result.url,
      secure_url: result.secure_url,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = uploadImg;
