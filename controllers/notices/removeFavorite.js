const { NotFound } = require('http-errors')

const removeFavorite = async (req, res) => {
  const { user } = req.user
  const { noticeId } = req.params

  const idx = user.favorite.indexOf(noticeId)
  if (idx === -1) {
    throw new NotFound(409, 'There is not notice in your favorite list')
  }

  user.favorite.splice(idx, 1)
  await user.save()

  res.json({
    code: 200,
    status: 'success',
    message: '"Remove notice from favorite',
    data: noticeId,
  })
}

module.exports = removeFavorite
