const mongoose = require("mongoose");


const TrainerRequest = new mongoose.Schema({
  status: {
    type: String,
    enum: ["pending", "accepted", "declined"],
    default: "pending",
  },
  cvPDF:{
    name: {
      type: String,
    },
    link: {
      type: String,
    }
  },
  adminMessage: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TrainerRequest", TrainerRequest);
