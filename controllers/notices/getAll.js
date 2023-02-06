const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getAll = async (req, res) => {
  const { category } = req.params
  const { page = 1, limit = 20 } = req.query
  const skip = (page - 1) * limit

  const result = await Notice.find({ category }, '-createdAt -updatedAt', {
    skip,
    limit,
  }).populate('owner', 'email')

  if (!result) {
    throw new NotFound(400, 'Invalid category')
  }

  res.json({
    code: 200,
    status: 'success',
    message: 'Get notices by category',
  })
}

module.exports = getAll
