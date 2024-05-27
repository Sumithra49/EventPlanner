const User = require("../models/user");

// Controller functions for user-related operations

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await user.isValidPassword(password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = user.generateAuthToken();
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
