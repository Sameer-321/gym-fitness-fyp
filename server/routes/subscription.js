const express = require("express");

const { createSubscription } = require("../controllers/createSubscription.js");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/create", protect, authorize("user"), createSubscription);

module.exports = router;
