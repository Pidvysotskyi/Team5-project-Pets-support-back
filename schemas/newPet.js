const Joi = require("joi").extend(require("@joi/date"));

const newPetSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120).required(),
  date: Joi.date().format(["DD.MM.YYYY"]).utc(),
});

module.exports = newPetSchema;
