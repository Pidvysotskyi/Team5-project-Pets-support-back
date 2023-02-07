const { Notice } = require("../../models");
const { NotFound } = require("http-errors");

const getUserNotices = async (req, res) => {
  const { _id: owner, email } = req.user;

  const result = await Notice.find({ owner });
  if (!result) {
    throw new NotFound(404);
  }

  const notices = result.map(notice => {
    return { _id: notice._id, category: notice.category, title: notice.title, birthday: notice.birthday, breed: notice.breed, city: notice.city, imageURL: notice.imageURL, price: notice.price };
  });

  res.json({
    code: 200,
    status: "success",
    data: notices,
  });
};

module.exports = getUserNotices;
