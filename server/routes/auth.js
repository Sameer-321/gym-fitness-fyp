const express = require("express");
const {
  register,
  login,
  getMe,
  updatedetails,
  updatePassword,
  logout,
} = require("../controllers/auth");

const router = express.Router();

// Protect Middleware
const { protect } = require("../middleware/auth");

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", protect, getMe);

router.put("/updatedetails", protect, updatedetails);

router.put("/updatepassword", protect, updatePassword);

module.exports = router;