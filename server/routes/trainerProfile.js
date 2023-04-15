const express = require("express");
const {
  deleteProfilePicture,
  getallTrainerProfile,
  getSingleTrainerProfile,
  createTrainerProfile,
  uploadCertificates,
  uploadPhotos,
} = require("../controllers/trainerProfile.js");
const upload = require("../middleware/upload.js");
const uploadPdf = require("../middleware/uploadPDF");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.get(
  "/",
  protect,
  authorize("trainer-pending", "admin"),
  getallTrainerProfile
);
router.get(
  "/:id",
  protect,
  authorize("trainer-pending", "admin"),
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

router.delete("/img/:user_id", deleteProfilePicture);

module.exports = router;
