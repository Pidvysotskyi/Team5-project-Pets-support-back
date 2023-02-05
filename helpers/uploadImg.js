const cloudinary = require("cloudinary").v2;
const { BadRequest } = require("http-errors");

const uploadImg = async imagePath => {
  try {
    console.log(imagePath);
    const result = await cloudinary.uploader.upload(imagePath);
    console.log(result);

    return {
      url: result.url,
      secure_url: result.secure_url,
    };
  } catch (error) {
    throw new BadRequest();
  }
};

module.exports = uploadImg;
