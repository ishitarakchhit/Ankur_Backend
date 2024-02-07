const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  submittedAt: { type: Date, default: Date.now },
  overallPerformance: {
    type: String,
    enum: ["excellent", "good", "average", "poor"],
  },
  academicProgress: { type: String },
  behavioralObservations: { type: String },
  communicationSkills: { type: String },
  socialSkills: { type: String },
  emotionalWellbeing: { type: String },
  physicalDevelopment: { type: String },
  attentionAndFocus: { type: String },
  memoryAndLearning: { type: String },
  problemSolvingSkills: { type: String },
  independenceAndSelfcare: { type: String },
  behavioralObservations: { type: String },
  engagementinActivities: { type: String },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
