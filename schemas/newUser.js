const Joi = require("joi");

const newUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  token: Joi.string(),
}).required();

module.exports = newUserSchema;
