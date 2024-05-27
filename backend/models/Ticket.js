const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
