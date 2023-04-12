const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: false,
  },
  initalForm: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
  activeStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Trainer", TrainerSchema);
