const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const addNotice = async (req, res, next) => {
  res.json({
    message: 'Add user notice',
  })
}

module.exports = addNotice
