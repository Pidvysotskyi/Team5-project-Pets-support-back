const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getbyId = async (req, res) => {
  const { noticeId } = req.params
  const notice = await Notice.findById(noticeId)

  if (!notice) {
    throw new NotFound(400, 'No such notice ')
  }

  res.json({
    code: 200,
    status: 'success',
    message: 'Get full notice by Id',
    data: notice,
  })
}

module.exports = getbyId
