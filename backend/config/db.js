require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  process.env.DATABASE_URL || "mongodb://localhost/eventplanner_db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = {
  port: process.env.PORT || 3000,
  databaseUrl:
    process.env.DATABASE_URL || "mongodb://localhost/eventplanner_db",
  jwtSecret: process.env.JWT_SECRET || "masai",
};
