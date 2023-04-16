const express = require("express");

const { createSubscription } = require("../controllers/subscription.js");

const  router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/create/:id", protect, authorize("user"), createSubscription);

module.exports = router;
