const Joi = require("joi");

const newPetSchema = Joi.object({}).required();

module.exports = newPetSchema;
