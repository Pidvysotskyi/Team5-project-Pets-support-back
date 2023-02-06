const Joi = require("joi").extend(require("@joi/date"));

const newNoticeSchema = Joi.object({
  category: Joi.string().valid("lost-found", "in-good-hands", "sell").required(),
  title: Joi.string().min(2).max(48).required(),
  name: Joi.string().min(2).max(16),
  birthday: Joi.date().format(["DD.MM.YYYY"]).utc(),
  breed: Joi.string().min(2).max(24),
  sex: Joi.string().valid("male", "female"),
  location: Joi.string().min(4).max(60).required(),
  price: Joi.number().min(1),
  imgURL: Joi.string(),
  comments: Joi.string().min(8).max(120),
}).required();

module.exports = newNoticeSchema;
