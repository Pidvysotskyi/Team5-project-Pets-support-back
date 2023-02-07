const Joi = require("joi");

const passwordError = new Error(`The password must be between 7 and 32 characters long and can contain any character except spaces`);
const phoneError = new Error(`The phone number must be in the following format: "+38096XXXXXXX"`);
const addressError = new Error(`The address should consist of two parts (city, region) separated by a comma and a space, like this: "Brovary, Kiev"`);

const newUserSchema = Joi.object({
  password: Joi.string()
    .pattern(/^[^ ]{7,32}$/)
    .error(passwordError)
    .required(),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  address: Joi.string()
    .pattern(/^[a-zA-Z]+[,][ ][a-zA-Z]+$/)
    .error(addressError)
    .required(),
  phone: Joi.string()
    .pattern(/^[+]{1}[0-9]{12}$/)
    .error(phoneError)
    .required(),
})
  .options({ abortEarly: false })
  .required();

module.exports = newUserSchema;
