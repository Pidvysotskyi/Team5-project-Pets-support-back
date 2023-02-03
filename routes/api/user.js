const express = require("express");
const { user: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { updatedUserSchema } = require("../../schemas/");

const router = express.Router();

router.patch("/update", auth, validation(updatedUserSchema), ctrlWrapper(ctrl.updateUser));
router.get("/get", auth, ctrlWrapper(ctrl.getUser));

module.exports = router;
