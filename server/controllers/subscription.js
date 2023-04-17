const Subscription = require("../models/Subscription");
const User = require("../models/User");

exports.createSubscription = async (req, res, next) => {
  console.log(req.params.id, 5555555555555555);
  console.log(req.body, 666666666666666);
  const userId = req.params.id;
  const userInfo = await User.findById(userId, "name  email profilePicture");

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

exports.getSingleSubscriptionDetail = async (req, res, next) => {
  try {
    const subscriptionDetail = await Subscription.findOne({
      "userInfo._id": req.params.id,
    });
    console.log(subscriptionDetail);

    if (!subscriptionDetail) {
      return res
        .status(404)
        .json({ message: "Subscription not found with a provided id" });
    }
    return res.status(200).json(subscriptionDetail);
  } catch (err) {
    next(err);
  }
};
