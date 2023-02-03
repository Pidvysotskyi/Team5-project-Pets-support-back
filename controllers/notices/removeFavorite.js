const removeFavorite = async (req, res, next) => {
  res.json({
    message: "Remove notice from favorite",
  });
};

module.exports = removeFavorite;
