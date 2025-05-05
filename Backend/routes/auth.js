// routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Example route
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
