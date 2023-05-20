const express = require("express");
const {
  getallTrainerProfile,
  getSingleTrainerProfile,
  createTrainerProfile,
  uploadCertificates,
  uploadPhotos,
  updateTrainerProfile,
} = require("../controllers/trainerProfile.js");
const upload = require("../middleware/upload.js");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.get("/", getallTrainerProfile);

router.get(
  "/:id",
  protect,
  authorize("trainer", "admin"),
  getSingleTrainerProfile
);

router.post("/", protect, createTrainerProfile);

router.put(
  "/uploadCertificates/:id",
  protect,
  upload.array("file"),
  uploadCertificates
);
router.put("/uploadPhotos/:id", upload.array("file"), uploadPhotos);

router.put("/update/:id", protect, authorize("trainer"), updateTrainerProfile);

// router.delete("/img/:user_id", deleteProfilePicture);

module.exports = router;
