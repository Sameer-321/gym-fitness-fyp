const express = require("express");
const {
  khalti,
  stripe,

} = require("../controllers/payment.js");

const router = express.Router();

// Protect Middleware
const { protect } = require("../middleware/auth");

router.post("/khalti", khalti);

router.post("/stripe",protect,  stripe);



module.exports = router;