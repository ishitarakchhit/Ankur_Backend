const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema({
  student: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
  },
  academics: {
    subject1: {
      type: Number,
    },
    subject2: {
      type: Number,
    },
    subject3: {
      type: Number,
    },
    subject4: {
      type: Number,
    },
    subject5: {
      type: Number,
    },
  },
  examType: { type: String},
  totalmarks: { type: Number },
  aquiredmarks: { type: Number },
});

module.exports = mongoose.model("Performance", PerformanceSchema);
