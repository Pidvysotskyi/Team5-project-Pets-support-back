const getUserNotices = async (req, res, next) => {
  res.json({
    message: "Get User created notices",
  });
};

module.exports = getUserNotices;
