
const express = require("express");
const express = require("express");
const {
 login
} = require("../controllers/admin.js");

const router = express.Router();

// Protect Middleware
const { protect,authorize } = require("../middleware/auth");



router.post("/login/admin", login);

router.get("/admin/me", protect, authorize("admin"), getMe);

router.put("/admin/updatedetails", protect, updatedetails);

router.put("/admin/updatepassword", protect, updatePassword);

module.exports = router;
