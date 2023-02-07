const Joi = require("joi");

const { passwordError } = require("./errors");

const { passwordPattern } = require("./patterns");

const loginUserSchema = Joi.object({
  password: Joi.string().pattern(passwordPattern).error(passwordError).required(),
  email: Joi.string().email().required(),
}).required();

module.exports = loginUserSchema;
