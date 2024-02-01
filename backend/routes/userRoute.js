const express = require("express");
const { auth } = require("../middleware/authMiddleware");

const {
    registerUser,
    authUser,
    registerListener,
    authListener,
    allUsers
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("/listener", registerListener);
router.post("/listener/login", authListener);
router.route("/").get(auth, allUsers);

module.exports = router;