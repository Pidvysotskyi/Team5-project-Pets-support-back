const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getUserNotices = async (req, res) => {
  const { _id: owner, email } = req.user

  const notices = await Notice.find({ owner })
  if (!notices) {
    throw new NotFound(404)
  }

  res.json({
    code: 200,
    status: 'success',
    message: 'Get User created notices',
    user: email,
    data: notices,
  })
}

module.exports = getUserNotices
