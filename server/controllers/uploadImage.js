const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

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
