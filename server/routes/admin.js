const express = require("express");

const {
  login,
  getMe,
  updatedetails,
  updatePassword,
} = require("../controllers/admin.js");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/login", login);

router.get("/me", protect, authorize("admin"), getMe);

router.put("/updatedetails", protect, authorize("admin"), updatedetails);

router.put("/updatepassword", protect, authorize("admin"), updatePassword);

module.exports = router;
