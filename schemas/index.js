const newUserSchema = require("./newUser");
const loginUserSchema = require("./loginUser");
const updatedUserSchema = require("./updatedUser");
const newPetSchema = require("./newPet");
const newNoticeSchema = require("./newNotice");

module.exports = {
  newUserSchema,
  updatedUserSchema,
  newNoticeSchema,
  newPetSchema,
  loginUserSchema,
};
