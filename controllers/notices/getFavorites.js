const { User } = require("../../models");
const { NotFound } = require("http-errors");

const getFavorites = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id).select({ favorite: 1, _id: 0 }).populate("favorite");

  if (!user) {
    throw new NotFound(404);
  }

  const notices = user.favorite.map(notice => {
    return { _id: notice._id, category: notice.category, title: notice.title, birthday: notice.birthday, breed: notice.breed, city: notice.city, imageURL: notice.imageURL, price: notice.price };
  });

  res.json({
    code: 200,
    status: "success",
    message: "Get User Favorite notices",
    favorite: notices,
  });
};

module.exports = getFavorites;
