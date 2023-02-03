const getAll = async (req, res, next) => {
  res.json({
    message: "Get all services",
  });
};

module.exports = getAll;
