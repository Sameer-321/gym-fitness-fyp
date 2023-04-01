const TrainerRequest = require("../models/Trainer-Request");
const User = require("../models/User")
exports.createRequest = async (req, res, next) => {
  const userid = req.params.id;
  const userInfo = await User.findById(userid, "name email profilePicture");

  const cvPDF = {
    name: req.file.name,
    link: req.file.path,
  };

  try {
    const trainerRequest = TrainerRequest.create({
      cvPDF,
      userInfo,
    });
    res.status(200).json(trainerRequest);
  } catch (err) {
    next(err);
  }
};

exports.updateRequest = async (req, res, next) => {
  try {
    const updateStatus = await TrainerRequest.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true } // this option returns the updated document
    );
    res.status(200).json(updateStatus);
  } catch (err) {
    next(err);
  }
};

exports.updateRequestWithMessage = async (req, res, next) => {
  try {
    const { status, adminMessage } = req.body;
    const updateFields = {};
    if (status) updateFields.status = status;
    if (adminMessage) updateFields.adminMessage = adminMessage;

    const updateStatus = await TrainerRequest.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true } // this option returns the updated document
    );
    res.status(200).json(updateStatus);
  } catch (err) {
    next(err);
  }
};

exports.getallRequests = async (req, res, next) => {
  try {
    const trainerRequests = await TrainerRequest.find();
    res.status(200).json(trainerRequests);
  } catch (err) {
    next(err);
  }
};

exports.getSingleRequest = async (req, res, next) => {
  try {
    const getSingleRequest = await TrainerRequest.findById(req.params.id);
    res.status(200).json(getSingleRequest);
  } catch (err) {
    next(err);
  }
};
