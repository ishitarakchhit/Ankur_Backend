const mongoose = require("mongoose");


const SessionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, 
  notes: { type: String },
});

module.exports = mongoose.model("Session", SessionSchema);
