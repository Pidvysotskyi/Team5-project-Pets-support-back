const Joi = require("joi");

const loginUserSchema = Joi.object({
  password: Joi.string().min(7).max(32).pattern(/[^ ]/).required(),
  email: Joi.string().email().required(),
}).required();

module.exports = loginUserSchema;
