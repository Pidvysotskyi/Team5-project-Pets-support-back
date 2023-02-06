const { Notice, User } = require('../../models')
const { NotFound } = require('http-errors')

const removeNotice = async (req, res, next) => {
  const { noticeId } = req.params

  const result = await Notice.findByIdAndDelete(noticeId)

  if (!result) {
    throw new NotFound(404, 'Notice Not found')
  }

  const users = await User.find({ favorite: noticeId })
  users.forEach(async (user) => {
    const idx = user.favorite.indexOf(noticeId)
    user.favorite.splice(idx, 1)
    await user.save()
  })

  res.json({
    code: 200,
    status: 'success',
    message: 'Remove User notice',
  })
}

module.exports = removeNotice
