const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema(
  {
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
      enum: ["active", "expired", "cancelled"],
      default: "active",
    },
    paymentMethod: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
