const TrainerRequest = require("../models/Trainer-Request");
const User = require("../models/User");

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

    if (updateStatus.status === "accepted") {
      const userId = updateStatus.userInfo._id;
      // update the role of the associated user to "trainer"
      const user = await User.findById(userId);
      user.role = "trainer";
      await user.save();
    }

    res.status(200).json(updateStatus);
  } catch (err) {
    console.log(err);
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
    let query = {};
    if (req.query.status === "accepted") {
      query = { status: "accepted" };
      // retrieve users based on the query filter
      const trainerRequests = await TrainerRequest.find(query);
      // send the response with the retrieved users
      res.status(200).json(trainerRequests);
    } else if (req.query.status === "pending") {
      query = { status: "pending" };
      // retrieve users based on the query filter
      const trainerRequests = await TrainerRequest.find(query);
      // send the response with the retrieved users
      res.status(200).json(trainerRequests);
    } else if (req.query.status === "rejected") {
      query = { status: "rejected" };
      // retrieve users based on the query filter
      const trainerRequests = await TrainerRequest.find(query);
      // send the response with the retrieved users
      res.status(200).json(trainerRequests);
    } else if (req.query.status === "trainer") {
      query = { role: "trainer" };
      const userTrainers = await User.find(query);
      res.status(200).json(userTrainers);
    } else if (req.query.status="all") {
      const t = await TrainerRequest.find();
      res.status(200).json(t);
    }
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
