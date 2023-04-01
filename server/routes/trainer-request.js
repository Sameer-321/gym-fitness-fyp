const express = require("express");
const {
  createRequest,
  updateRequest,
  getallRequests,
  getSingleRequest,
} = require("../controllers/trainer-request");

const uploadPdf = require("../middleware/uploadPDF");

const router = express.Router();

// Protect Middleware

const { protect, authorize } = require("../middleware/auth");
("/api/v1/admin/trainers/");
// router.post("/createRequest", uploadPdf.single("file"), protect, createRequest);
router.post("/createRequest/:id", uploadPdf.single("file"), createRequest);

router.put("/updateRequest", protect, updateRequest);

// router.get("/getall", protect, authorize("admin"), getallRequests);
// router.get("/get/:id", protect, authorize("admin"), getSingleRequest);

router.get("/getall", getallRequests);

router.get("/get/:id", getSingleRequest);

module.exports = router;
