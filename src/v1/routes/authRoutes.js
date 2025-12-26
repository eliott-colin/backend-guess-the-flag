const express = require("express");
const authController = require("../../controllers/authController.js");
const router = express.Router();

router.post("/register", authController.userRegistration);
router.post("/login", authController.userConnection);

module.exports = router;