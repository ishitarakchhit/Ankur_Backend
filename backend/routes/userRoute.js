const express = require("express");
const { auth } = require("../middleware/authMiddleware");

const {
    registerUser,
    authUser,
    registerListener,
    authListener,
    allUsers,
    getUserDetails,
    editUserDetails,
    searchUsersByRole,
    searchStudents,
    searchStudentsinT,
    submitFeedback,
    getPastFeedbacks
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("/listener", registerListener);
router.post("/listener/login", authListener);
router.route("/").get(allUsers);
router.route("/search").get(searchUsersByRole);
router.route("/searchst").get(searchStudents);
router.route("/searchstt").get(searchStudentsinT);
router.route("/:userId").get(getUserDetails);
router.put("/:userId", editUserDetails);
router.post("/feedback", submitFeedback);
router.post("/prevfeedback", getPastFeedbacks);



module.exports = router;