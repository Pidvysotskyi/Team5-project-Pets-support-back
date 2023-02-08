const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getByKeyword = async (req, res, next) => {
  const keyword = req.query.keyword
  const result = await Notice.find({
    title: { $regex: keyword, $options: 'i' },
  })

  if (!result) {
    throw new NotFound(400, 'Nothing found for your request')
  }

  res.json({
    code: 200,
    status: 'success',
    data: result,
  })
}

module.exports = getByKeyword
