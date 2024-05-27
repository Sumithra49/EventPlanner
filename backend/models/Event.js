const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: String,
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
