const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User routes

// Register a new user
router.post("/register", userController.registerUser);

// Login user
router.post("/login", userController.loginUser);

module.exports = router;
