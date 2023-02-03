const Joi = require("joi");

const newNoticeSchema = Joi.object({}).required();

module.exports = newNoticeSchema;
