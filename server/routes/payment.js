const express = require("express");
const { khalti, stripe } = require("../controllers/payment.js");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/khalti", khalti);

module.exports = router;
