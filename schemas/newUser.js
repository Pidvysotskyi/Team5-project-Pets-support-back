const Joi = require("joi");

const newUserSchema = Joi.object({
  password: Joi.string()
    .min(7)
    .max(32)
    .pattern(/^[^ ]+$/)
    .required(),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^[0-9\-\+]{9,15}$/)
    .required(),
}).required();

module.exports = newUserSchema;
