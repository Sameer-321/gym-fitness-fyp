const mongoose = require("mongoose");

const TrainerSubscriptionSchema = new mongoose.Schema(
  {
    userInfo: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    trainerId: {
      type: String,
    },
    subscribtionTier: {
      type: String,
    },
    productIdentity: {
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
  },
  { timestamps: true }
);

const Subscription = mongoose.model(
  "TrainerSubscription",
  TrainerSubscriptionSchema
);

const updateSubscriptionStatus = async () => {
  const currentDate = new Date();

  const expiredSubscriptions = await Subscription.find({
    endDate: { $lte: currentDate }, //lte:less than or equal to
  });

  expiredSubscriptions.forEach(async (subscription) => {
    subscription.status = "expired";
    await subscription.save();
  });
};

setInterval(updateSubscriptionStatus, 3600000); // Run every hour (in milliseconds)

module.exports = mongoose.model(
  "TrainerSubscription",
  TrainerSubscriptionSchema
);
