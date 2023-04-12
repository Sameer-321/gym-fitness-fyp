const Trainer = require("../models/Trainer");
const User = require("../models/User");

exports.createRequest = async (req, res, next) => {
  const crediential_id = req.params.id;
  const { name, email } = req.body;
  try {
    const trainer = await Trainer.create(req.body);
    res.status(200).json(trainer);

    if (trainer) {
      const updatedUser = await User.findByIdAndUpdate(
        crediential_id,
        { $set: { name: name, email: email } }, // *****************
        { new: true }
      );
    }
  } catch (err) {
    next(err);
  }
};

exports.getallRequests = async (req, res, next) => {
  //true status for active user and contratary

  try {
    let query = {};
    if (req.query.status === true || false) {
      //True for Active status of the trainer
      query = { active: req.query.status };
      const userTrainers = await User.find(query);
      res.status(200).json(userTrainers);
    }

    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (err) {
    next(err);
  }
};

exports.getSingleRequest = async (req, res, next) => {
  try {
    const getSingleRequest = await Trainer.findById(req.params.id);
    res.status(200).json(getSingleRequest);
  } catch (err) {
    next(err);
  }
};
