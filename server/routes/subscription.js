const express = require("express");

const {
  createSubscription,
  getSingleSubscriptionDetail,
} = require("../controllers/subscription.js");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/create/:id", protect, authorize("user"), createSubscription);
router.get(
  "/getSubscriptionDetail/:id",
  protect,
  authorize("user"),
  getSingleSubscriptionDetail
);

module.exports = router;
