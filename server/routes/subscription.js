const express = require("express");

const {
  createSubscription,
  getSingleSubscriptionDetail,
  getAllSubscriptionDetail,
  extendSubscription,
  deleteSubscriber
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
router.get(
  "/getAllSubscriptionDetail/",
  // protect,
  // authorize("admin"),
  getAllSubscriptionDetail
);

router.put(
  "/extendSubscription/:id", //id of the subscription schema
  // protect,
  // authorize("admin"),
  extendSubscription
);
router.delete(
  "/deleteSubscriber/:id", //id of the subscription schema
  // protect,
  // authorize("admin"),
  deleteSubscriber
);

module.exports = router;
