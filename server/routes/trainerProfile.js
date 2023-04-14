const express = require("express");
const {
  uploadImage,
  updateProfilePicture,
  deleteProfilePicture,
  getallTrainerProfile,
  getSingleTrainerProfile,
  createTrainerProfile,
  uploadCertificates,
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
router.post("/", protect, authorize("trainer-pending"), createTrainerProfile);
router.put("/uploadCertificates/:id", upload.array("file"), uploadCertificates);
router.post("/img/multiple/:trainerId", upload.array("files"), uploadImage);
router.put("/img/:user_id", upload.single("file"), updateProfilePicture);
router.delete("/img/:user_id", deleteProfilePicture);

module.exports = router;
