const Joi = require('joi')

const newNoticeSchema = Joi.object({
  category: Joi.string()
    .valid('lost-found', 'in-good-hands', 'sell')
    .required(),
  title: Joi.string().min(2).max(48).required(),
  name: Joi.string().min(2).max(16),
  birthday: Joi.string()
    .pattern(new RegExp('(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)'))
    .max('now'),
  breed: Joi.string().min(2).max(24),
  sex: Joi.string().valid('male', 'female'),
  location: Joi.string().min(4).max(60),
  price: Joi.number().min(1),
  imgURL: Joi.string(),
  comments: Joi.string().min(8).max(120).required(),
}).required()

module.exports = newNoticeSchema
