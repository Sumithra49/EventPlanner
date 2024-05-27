const express = require("express");
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/eventRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const userRoutes = require("./routes/userRoutes");
const database = require("./config/db");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/events", eventRoutes);
app.use("/tickets", ticketRoutes);
app.use("/users", userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
