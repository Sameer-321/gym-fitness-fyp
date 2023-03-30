const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been delete");
  } catch (err) {
    next(err);
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const userAll = await User.find();
    res.status(200).json(userAll);
  } catch (err) {
    next(err);
  }
};

exports.getUser= async (req, res, next) => {
  try {
    const savedUser = await newUser.findById(req.params.id);
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
