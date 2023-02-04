const router = require("express").Router();

const { pets: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { newPetSchema } = require("../../schemas/");

router.get("/get", auth, ctrlWrapper(ctrl.getAllPets));
router.post("/add", auth, validation(newPetSchema), ctrlWrapper(ctrl.addPet));
router.delete("/remove/:id", auth, ctrlWrapper(ctrl.removePet));

module.exports = router;
