const router = require("express").Router();

const { pets: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { newPetSchema } = require("../../schemas/");

router.post("/add", auth, validation(newPetSchema), ctrlWrapper(ctrl.addPet));

router.delete("/remove/:id", auth, ctrlWrapper(ctrl.removePet));

module.exports = router;
