const getAll = async (req, res, next) => {
  res.json({
    message: "Get all news",
  });
};

module.exports = getAll;
