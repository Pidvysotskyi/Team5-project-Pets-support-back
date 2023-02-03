const getAll = async (req, res, next) => {
  res.json({
    message: "Get notices by category",
  });
};

module.exports = getAll;
