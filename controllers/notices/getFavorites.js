const getFavorites = async (req, res, next) => {
  res.json({
    message: "Get User Favorite notices",
  });
};

module.exports = getFavorites;
