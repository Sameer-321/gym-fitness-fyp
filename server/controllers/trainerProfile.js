const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const TrainerProfile = require("../models/TrainerProfile");
const fs = require("fs");

//@desc     Register Users
//@route    POST /api/v1/auth/register
//@acess    Public

//trainer section

exports.createTrainerProfile = async (req, res, next) => {
  console.log(req.body, "body-check");
  const userId = req.user.id;
  const userInfo = await User.findById(userId, "name email profilePicture");

  console.log(userInfo, "userInfouserInfouserInfo");

  try {
    const trainerProfileData = new TrainerProfile({
      userInfo,
      yearsOfExperience: req.body.trainerForm.yearsOfExperience,
      description: req.body.trainerForm.description,
      trainerType: req.body.trainerForm.trainerType,
      gender: req.body.trainerForm.gender,
    });
    console.log(
      trainerProfileData,
      "trainerProfileDatatrainerProfileDatatrainerProfileData"
    );

    const trainerProfile = await trainerProfileData.save();

    console.log(trainerProfile, "trainerProfiletrainerProfiletrainerProfile");

    if (trainerProfile) {
      const userId = trainerProfile.userInfo._id;
      const user = await User.findById(userId);
      // console.log(user, "useruseruser");
      user.role = "trainer";
      // console.log(user, "useruseruser")
      await user.save();
    }
    res.status(201).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

//use uploadCertificates and uploadPhotos while submitting form only
exports.uploadCertificates = async (req, res, next) => {
  const trainerProfileId = req.params.id;
  console.log(req.files);
  if (!req.files) {
    return res.status(400).json({ error: "No files were uploaded" });
  }
  const certificates = req.files.map((file) => ({
    name: file.originalname,
    link: file.path,
  }));

  try {
    const trainerProfile = await TrainerProfile.findByIdAndUpdate(
      trainerProfileId,
      { $push: { certificates: { $each: certificates } } },
      { new: true }
    );
    res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

exports.uploadPhotos = async (req, res, next) => {
  const trainerProfileId = req.params.id;
  const photos = req.files.map((file) => ({
    name: file.originalname,
    link: file.path,
  }));
  try {
    const trainerProfile = await TrainerProfile.findByIdAndUpdate(
      trainerProfileId,
      { $push: { photos: { $each: photos } } },
      { new: true }
    );
    res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

exports.getallTrainerProfile = async (req, res, next) => {
  try {
    const trainerProfiles = await TrainerProfile.find();
    res.status(200).json(trainerProfiles);
  } catch (err) {
    next(err);
  }
};

exports.getSingleTrainerProfile = async (req, res, next) => {
  try {
    const trainerProfile = await TrainerProfile.findOne({
      "userInfo._id": req.params.id,
    });
    console.log(trainerProfile,1067777777777777777777777777777777)
    res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};
