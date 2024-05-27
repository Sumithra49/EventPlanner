const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authenticateJWT = require("../middleware/authMiddleware");

// Event routes

// Create a new event
router.post("/", authenticateJWT, eventController.createEvent);

// Get all events
router.get("/", eventController.getAllEvents);

// Get event by ID
router.get("/:id", eventController.getEventById);

// Update event by ID
router.put("/:id", authenticateJWT, eventController.updateEventById);

// Delete event by ID
router.delete("/:id", authenticateJWT, eventController.deleteEventById);

module.exports = router;
