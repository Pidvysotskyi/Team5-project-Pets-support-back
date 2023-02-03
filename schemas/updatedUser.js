const Joi = require("joi");

const updatedUserSchema = Joi.object({
  password: Joi.string(),
  email: Joi.string().email(),
  token: Joi.string(),
}).required();

module.exports = updatedUserSchema;
