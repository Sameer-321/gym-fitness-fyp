const express = require("express");
const {
  khalti,
  stripe,

} = require("../controllers/payment.js");

const router = express.Router();

// Protect Middleware
const { protect } = require("../middleware/auth");

router.post("/khalti", khalti);

router.post("/stripe", stripe);

// router.get("/logout", logout);

// router.get("/me", protect, getMe);

// router.put("/updatedetails", protect, updatedetails);

// router.put("/updatepassword", protect, updatePassword);

module.exports = router;