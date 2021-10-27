const express = require("express");
const router = express.Router();
const { register, authUser } = require("../controllers/userController");

router.route("/").post(register);
router.route("/login").post(authUser);

module.exports = router;