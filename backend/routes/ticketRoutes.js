const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const authenticateJWT = require("../middleware/authMiddleware");

// Ticket routes

// Create a new ticket
router.post("/", authenticateJWT, ticketController.createTicket);

// Get all tickets
router.get("/", ticketController.getAllTickets);

// Get ticket by ID
router.get("/:id", ticketController.getTicketById);

// Update ticket by ID
router.put("/:id", authenticateJWT, ticketController.updateTicketById);

// Delete ticket by ID
router.delete("/:id", authenticateJWT, ticketController.deleteTicketById);

module.exports = router;
