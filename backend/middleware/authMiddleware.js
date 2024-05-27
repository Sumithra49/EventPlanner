const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

// Middleware function for JWT authentication
const authenticateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = authenticateJWT;
