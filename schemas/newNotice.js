const Joi = require("joi").extend(require("@joi/date"));

const allLettersPattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ]+$/;
const location = /^[a-zA-Z]+[,][ ][a-zA-Z]+$/;
const pricePattern = /^[1-9][0-9]*$/;

const titleError = new Error(`The title must be between 2 and 48 characters long and can contain any letter character`);
const nameError = new Error(`The name must be between 2 and 16 characters long and can contain any letter character`);
const breedError = new Error(`The breed must be between 2 and 24 characters long and can contain any letter character`);
const locationError = new Error(`The address should consist of two parts (city, region) separated by a comma and a space, like this: "Brovary, Kiev"`);
const priceError = new Error(`The price should not start at "0"`);

const newNoticeSchema = Joi.object({
  category: Joi.string().valid("lost-found", "in-good-hands", "sell").required(),
  title: Joi.string().min(2).max(48).pattern(allLettersPattern).error(titleError).required(),
  name: Joi.string().min(2).max(16).pattern(allLettersPattern).error(nameError),
  birthday: Joi.date().format(["DD.MM.YYYY"]).utc(),
  breed: Joi.string().min(2).max(24).pattern(allLettersPattern).error(breedError),
  sex: Joi.string().valid("male", "female"),
  location: Joi.string().min(4).max(60).pattern(location).error(locationError).required(),
  price: Joi.string().min(1).pattern(pricePattern).error(priceError),
  imgURL: Joi.string(),
  comments: Joi.string().min(8).max(120).required(),
}).required();

module.exports = newNoticeSchema;
