const { User } = require('../../models')
const { NotFound } = require('http-errors')

const getFavorites = async (req, res) => {
  const { _id } = req.user
  const notice = await User.findById(_id)
    .select({ favorite: 1, _id: 0 })
    .populate('favorite')

  if (!notice) {
    throw new NotFound(404)
  }
  res.json({
    code: 200,
    status: 'success',
    message: 'Get User Favorite notices',
    favorite: notice.favorite,
  })
}

module.exports = getFavorites
