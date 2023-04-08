const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const fs = require("fs");

const axios = require("axios");
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

    // Delete the profile picture file from the server
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
