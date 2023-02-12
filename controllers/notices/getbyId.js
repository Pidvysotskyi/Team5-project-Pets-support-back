const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getbyId = async (req, res) => {
  const { noticeId } = req.params

  const notice = await Notice.findById(noticeId).populate(
    'owner',
    'name email phone'
  )

  if (!notice) {
    throw new NotFound('404, No such notice ')
  }

  res.json({
    code: 200,
    status: 'success',
    message: 'Get notices by ID',
    data: notice,
  })
}

module.exports = getbyId
