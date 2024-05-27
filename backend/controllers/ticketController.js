const Ticket = require("../models/Ticket");

// Controller functions for ticket-related operations

// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update ticket by ID
exports.updateTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete ticket by ID
exports.deleteTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
