const Subscription = require("../models/TrainerSubscription");
const User = require("../models/User");

exports.createSubscription = async (req, res, next) => {
  // console.log(req.params.id, 5555555555555555);
  // console.log(req.body, 666666666666666);
  const userId = req.params.id;
  const userInfo = await User.findById(userId, "name  email profilePicture");

  try {
    const subscription = new Subscription({
      userInfo,
      trainerId: req.body.trainerId,
      subscribtionTier: "monthly",
      productIdentity: req.body.productIdentity,
      status: req.body.status,
      amount: req.body.amount,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      paymentMethod: "Khalti",
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

exports.getAllSubscriptionDetail = async (req, res, next) => {
  try {
    const subscriptionDetail = await Subscription.find();
    return res.status(200).json(subscriptionDetail);
  } catch (err) {
    next(err);
  }
};

exports.extendSubscription = async (req, res, next) => {
  try {
    const { endDate } = req.body;

    const updateStatus = await Subscription.findByIdAndUpdate(
      req.params.id,
      { $set: { endDate: endDate } },
      { new: true } // this option returns the updated document
    );
    res.status(200).json(updateStatus);
  } catch (err) {
    next(err);
  }
};

exports.deleteSubscriber = async (req, res, next) => {
  try {
    await Subscription.findByIdAndDelete(req.params.id);
    res.status(200).json("Subscriber has been delete");
  } catch (err) {
    next(err);
  }
};
