const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getAll = async (req, res) => {
  const { category } = req.params
  console.log(category)
  const { page = 1, limit = 20, keyword = '' } = req.query
  const skip = (page - 1) * limit

  if (keyword === '') {
    const result = await Notice.find({ category }, '-createdAt -updatedAt', {
      skip,
      limit,
    }).populate('owner', 'email')

    const notices = result.map((notice) => {
      return {
        _id: notice._id,
        category: notice.category,
        title: notice.title,
        birthday: notice.birthday,
        breed: notice.breed,
        city: notice.city,
        imageURL: notice.imageURL,
        price: notice.price,
      }
    })

    if (!result) {
      throw new NotFound(400, 'Invalid category')
    }

    res.json({
      code: 200,
      status: 'success',
      data: notices,
    })
  } else {
    const result = await Notice.find(
      { category, title: { $regex: keyword, $options: 'i' } },
      '-createdAt -updatedAt',
      {
        skip,
        limit,
      }
    ).populate('owner', 'email')

    const notices = result.map((notice) => {
      return {
        _id: notice._id,
        category: notice.category,
        title: notice.title,
        birthday: notice.birthday,
        breed: notice.breed,
        city: notice.city,
        imageURL: notice.imageURL,
        price: notice.price,
      }
    })

    if (!result) {
      throw new NotFound(400, 'Nothing found for your request')
    }

    res.json({
      code: 200,
      status: 'success',
      data: notices,
    })
  }
}

module.exports = getAll
