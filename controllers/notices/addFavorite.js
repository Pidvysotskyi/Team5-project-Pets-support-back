const { User } = require("../../models");
const { NotFound } = require("http-errors");

const addFavorite = async (req, res) => {
  const { user } = req;
  const { noticeId } = req.params;

  const isAdded = user.favorite.includes(noticeId);
  if (isAdded) {
    throw new NotFound(409, "Notice is already in your favorite list");
  }
  user.favorite.push(noticeId);

  await user.save();

  res.json({
    code: 201,
    status: "success",
    message: "The notice have added to favorites",
  });
};

module.exports = addFavorite;
