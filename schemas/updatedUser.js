const Joi = require("joi");

const updatedUserSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  birthday: Joi.date(),
  phone: Joi.string().pattern(/^[0-9\-\+]{9,15}$/),
  city: Joi.string(),
}).required();

module.exports = updatedUserSchema;
