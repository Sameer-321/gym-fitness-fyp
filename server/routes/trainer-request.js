const express = require("express");
const {
  createRequest,
  updateRequest,
  getallRequests,
  getSingleRequest,
} = require("../controllers/trainer-request");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/createRequest", protect,  createRequest);

router.put("/updateRequest", protect, updateRequest);

router.get("/", protect, getallRequests);

router.get("/:id", protect, getSingleRequest);

module.exports = router;
