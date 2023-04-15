const mongoose = require("mongoose");

const TrainerProfileSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },
  trainerType: [
    {
      type: String,
      enum: ["powerlifting", "bodybuilding", "crossfit"],
    },
  ],
  yearsOfExperience: {
    type: String,
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
  userInfo: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    email: String,
  },
});

module.exports = mongoose.model("TrainerProfile", TrainerProfileSchema);
