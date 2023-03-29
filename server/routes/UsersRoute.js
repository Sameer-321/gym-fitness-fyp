const express = require("express");

const {
  
} = require("");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

router.post("/login", login);

router.get("/allUsers", protect, authorize("admin"), getMe);

router.put("/updatedetails", protect, authorize("admin"), updatedetails);



module.exports = router;
