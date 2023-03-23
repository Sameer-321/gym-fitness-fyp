const ErrorResponse = require("../utils/errorResponse");
//const User = require("../models/User");
const axios = require("axios");
//@desc     Register Users
//@route    POST /api/v1/auth/register
//@acess    Public

exports.uploadImage = async (req, res, next) => {
  console.log(req.file, req.body, 9);
  console.log(req,100)

  const title = req.body.title;
  const description = req.body.description;
  const imageUrl = req.file.path;
  if (!title || !description || !imageUrl) {
    return res.send({ code: 400, message: "BAd REquest" });
  }
  const image = new imageModel({
    title: title,
    description: description,
    imageUrl: imageUrl,
  });
  const success = await image.save();

  if (success) {
    return res.send({ code: 200, message: "add success" });
  } else {
    return res.send({ code: 500,message:"Internal Server Error" });
  }
};
