const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving to the database
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Method to compare password
userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  const user = this;
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
