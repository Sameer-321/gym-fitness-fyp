const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema({
  gender: {
    type: text,
    required: true,
  },
  status: [
    {
      type: String,
      enum: ["powerLifting", "bodyBuilding", "crossFit"],
    },
  ],
  yearOfExperience: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],
  certificates: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],

  credential_id: {
    type: String,
  },
});

module.exports = mongoose.model("Trainer", TrainerSchema);
