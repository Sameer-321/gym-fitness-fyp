const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const TrainerProfile = require("../models/TrainerProfile");
const fs = require("fs");

//@desc     Register Users
//@route    POST /api/v1/auth/register
//@acess    Public

exports.uploadImage = async (req, res, next) => {
  try {
    const image = {
      name: req.file.name,
      link: req.file.path,
    };

    const user = await User.findById(req.params.user_id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No image found with the provided id",
      });
    }

    user.profilePicture = image;

    await user.save();

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProfilePicture = async (req, res, next) => {
  try {
    const image = {
      name: req.file.name,
      link: req.file.path,
    };

    const user = await User.findById(req.params.user_id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user found with the provided id",
      });
    }

    // Check if the user has a profile picture
    if (user.profilePicture) {
      // Delete the previous profile picture file from the server
      fs.unlinkSync(user.profilePicture.link);
    }

    user.profilePicture = image;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile picture updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProfilePicture = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.user_id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user found with the provided id",
      });
    }

    // Check if the user has a profile picture
    if (!user.profilePicture) {
      return res.status(400).json({
        success: false,
        message: "User does not have a profile picture",
      });
    }

    // Delete the pic file from the server
    fs.unlinkSync(user.profilePicture.link);

    // Remove the profile picture reference from the user document
    user.profilePicture = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile picture deleted successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

//trainer section

exports.createTrainerProfile = async (req, res, next) => {
  const userId = req.user.id;
  const userInfo = await User.findById(userId, "name email profilePicture");

  console.log(userInfo, "userInfouserInfouserInfo")

  try {
    const trainerProfileData = new TrainerProfile({
      userInfo,
      yearOfExperience: req.body.yearOfExperience,
      description: req.body.description,
      trainerType: req.body.trainerType,
      gender: req.body.gender,
    });
    console.log(trainerProfileData, "trainerProfileDatatrainerProfileDatatrainerProfileData")

    const trainerProfile = await trainerProfileData.save();

    console.log(trainerProfile, "trainerProfiletrainerProfiletrainerProfile")

    if (trainerProfile) {
      const userId = trainerProfile.userInfo._id;
      const user = await User.findById(userId);
      console.log(user, "useruseruser")
      // user.role = "trainer";
      // console.log(user, "useruseruser")
      await user.save();
    }

    res.status(201).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

exports.uploadCertificates = async (req, res, next) => {
  const trainerProfileId = req.params.id;
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
    const trainerProfile = await TrainerProfile.findById(req.params.id);
    res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};
