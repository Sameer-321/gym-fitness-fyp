const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema(
  {
    userInfo: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    },
    subscribtionTier: {
      type: String,
    },
    amount: {
      type: Number,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["active", "expired", "pause", "cancelled"],
      default: "active",
    },
    paymentMethod: {
      type: String,
    },
    data: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
