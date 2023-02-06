const { Notice } = require("../../models");
const fs = require("fs/promises");
const uploadImg = require("../../helpers/uploadImg");

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;

  if (!req.file) {
    const notice = await Notice.create({ ...req.body, owner });
    res.status(201).json({
      code: 201,
      status: "success",
      message: "Add user notice",
      data: notice,
    });
  } else {
    const { path: tempUpload } = req.file;
    const result = await uploadImg(tempUpload);
    const { url: imageURL, secure_url } = result;

    const notice = await Notice.create({
      ...req.body,
      owner,
      imageURL: imageURL,
    });
    fs.unlink(tempUpload);

    res.status(201).json({
      code: 201,
      status: "success",
      message: "Add user notice",
      data: notice,
    });
  }
};

module.exports = addNotice;
