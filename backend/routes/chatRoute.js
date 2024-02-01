const express = require("express");
const { auth } = require("../middleware/authMiddleware");

const {
    accessChat,
    fetchChats,
    creatGroupChat,
    renameGroup,
    addToGroup,
    removeFromGroup
} = require("../controllers/chatController");

const router = express.Router();

router.route('/').post(auth,accessChat);
router.route("/").get(auth,fetchChats);
router.route("/group").post(auth,creatGroupChat);
router.route("/rename").put(auth,renameGroup);
router.route("/groupremove").put(auth,removeFromGroup);
router.route("/groupadd").put(auth,addToGroup);

module.exports = router;