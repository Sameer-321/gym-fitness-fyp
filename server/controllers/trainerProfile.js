const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const TrainerProfile = require("../models/TrainerProfile");
const fs = require("fs");

//@desc     Register Users
//@route    POST /api/v1/auth/register
//@acess    Public

//trainer section

exports.createTrainerProfile = async (req, res, next) => {
  // console.log(req.body, "body-check");
  const userId = req.user.id;
  const userInfo = await User.findById(userId, "name email profilePicture");

  // console.log(userInfo, "userInfouserInfouserInfo");

  try {
    const trainerProfileData = new TrainerProfile({
      userInfo,
      yearsOfExperience: req.body.trainerForm.yearsOfExperience,
      firstName: req.body.trainerForm.firstName,
      lastName: req.body.trainerForm.lastName,
      yearsOfExperience: req.body.trainerForm.yearsOfExperience,
      description: req.body.trainerForm.description,
      trainerType: req.body.trainerForm.trainerType,
      gender: req.body.trainerForm.gender,
    });
    // console.log(
    //   trainerProfileData,
    //   "trainerProfileDatatrainerProfileDatatrainerProfileData"
    // );

    const trainerProfile = await trainerProfileData.save();

    // console.log(trainerProfile, "trainerProfiletrainerProfiletrainerProfile");

    if (trainerProfile) {
      const userId = trainerProfile.userInfo._id;
      const user = await User.findById(userId);
      // console.log(user, "useruseruser");
      user.role = "trainer";
      // console.log(user, "useruseruser")
      await user.save();
    }
    return res.status(201).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

//use uploadCertificates and uploadPhotos while submitting form only

exports.uploadCertificates = async (req, res, next) => {
  const trainerProfileId = req.params.id;
  const certificates = req.files.map((file) => ({
    name: file.originalname,
    link: file.path,
  }));

  try {
    let updateCertificates = certificates;
    // Check if the request includes files
    if (!req.files || req.files.length === 0) {
      // User did not update the certificates, so fetch the existing certificates
      const trainerProfile = await TrainerProfile.findById(trainerProfileId);
      updateCertificates = trainerProfile.certificates; // Use existing certificates
    } else {
      // User updated the certificates, delete the previous certificates
      const trainerProfile = await TrainerProfile.findById(trainerProfileId);
      const previousCertificates = trainerProfile.certificates;

      // Delete previous certificate files
      previousCertificates.forEach((certificate) => {
        fs.unlink(certificate.link, (err) => {
          if (err) {
            console.log("Failed to delete certificate:", certificate.link);
          }
        });
      });
    }

    const trainerProfile = await TrainerProfile.findByIdAndUpdate(
      trainerProfileId,
      { certificates: updateCertificates },
      { new: true }
    );
    return res.status(200).json(trainerProfile);
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
    let updatePhotos = photos;

    // Check if the request includes files
    if (!req.files || req.files.length === 0) {
      // User did not update the photos, so fetch the existing photos
      const trainerProfile = await TrainerProfile.findById(trainerProfileId);
      updatePhotos = trainerProfile.photos; // Use existing photos
    } else {
      // User updated the photos, delete the previous photos
      const trainerProfile = await TrainerProfile.findById(trainerProfileId);
      const previousPhotos = trainerProfile.photos;

      // Delete previous photo files
      previousPhotos.forEach((photo) => {
        fs.unlink(photo.link, (err) => {
          if (err) {
            console.log("Failed to delete photo:", photo.link);
          }
        });
      });
    }

    const trainerProfile = await TrainerProfile.findByIdAndUpdate(
      trainerProfileId,
      { photos: updatePhotos },
      { new: true }
    );
    return res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

exports.updateTrainerProfile = async (req, res, next) => {
  // console.log(req.body, "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
  const userId = req.user.id;
  const profileId = req.params.id;
  const userInfo = await User.findById(userId, "name email profilePicture");

  try {
    const trainerProfileData = {
      userInfo,
      yearsOfExperience: req.body.yearsOfExperience,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      description: req.body.description,
      trainerType: req.body.trainerType,
      gender: req.body.gender,
    };

    const trainerProfile = await TrainerProfile.findByIdAndUpdate(
      profileId,
      trainerProfileData,
      { new: true }
    );

    if (!trainerProfile) {
      return res.status(404).json({ error: "Trainer profile not found" });
    }

    return res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};

exports.getallTrainerProfile = async (req, res, next) => {
  try {
    const trainerProfiles = await TrainerProfile.find();
    return res.status(200).json(trainerProfiles);
  } catch (err) {
    next(err);
  }
};

exports.getSingleTrainerProfile = async (req, res, next) => {
  try {
    const trainerProfile = await TrainerProfile.findOne({
      "userInfo._id": req.params.id,
    });

    return res.status(200).json(trainerProfile);
  } catch (err) {
    next(err);
  }
};
