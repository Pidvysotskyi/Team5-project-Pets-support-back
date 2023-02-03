const express = require("express");
const { notices: ctrl } = require("../../controllers");
const { ctrlWrapper, auth, validation } = require("../../middlewares");
const { newNoticeSchema } = require("../../schemas/");

const router = express.Router();

router.get("/get", auth, ctrlWrapper(ctrl.getAll));
router.get("/get/:noticeId", auth, ctrlWrapper(ctrl.getbyId));
router.put("/favorite/add", auth, ctrlWrapper(ctrl.addFavorite));
router.get("/favorite/get", auth, ctrlWrapper(ctrl.getFavorites));
router.delete("/favorite/remove/:noticeId", auth, ctrlWrapper(ctrl.removeFavorite));
router.post("/current/add", auth, validation(newNoticeSchema), ctrlWrapper(ctrl.addNotice));
router.get("/current/get", auth, ctrlWrapper(ctrl.getUserNotices));
router.delete("/current/delete", auth, ctrlWrapper(ctrl.removeNotice));

module.exports = router;
