const mongoose = require("mongoose");

const TrainerRequest = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
    cvPDF: {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
    },
    adminMessage: {
      type: String,
    },
    userInfo: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      name: String,
      email: String,
      profilePicture: {
        name: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("TrainerRequest", TrainerRequest);
