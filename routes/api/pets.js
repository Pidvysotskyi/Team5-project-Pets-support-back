const express = require("express");
const { pets: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { newPetSchema } = require("../../schemas/");

const router = express.Router();

router.post("/add", auth, validation(newPetSchema), ctrlWrapper(ctrl.addPet));
router.delete("/remove/:id", auth, ctrlWrapper(ctrl.removePet));

module.exports = router;
