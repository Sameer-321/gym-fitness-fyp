const Subscription = require("../models/Subscription");
const User = require("../models/User");

exports.createSubscription = async (req, res, next) => {
  const userId = req.params.id;
  const userInfo = await User.findById(userId, "name _id email profilePicture");

  try {
    const subscription = new Subscription({
      userInfo,
      subscriptionTier: req.body.subscriptionTier,
      amount: req.body.amount,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      paymentMethod: req.body.paymentMethod,
    });

    const savedSubscription = await subscription.save();
    res.status(200).json(savedSubscription);
  } catch (err) {
    next(err);
  }
};
