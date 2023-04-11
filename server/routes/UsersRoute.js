const express = require("express");

const {
  createUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUser,
} = require("../controllers/Users.js");

const router = express.Router();

// Protect Middleware
const { protect, authorize } = require("../middleware/auth");

//create
router.post("/create", protect, authorize("admin"), createUser);

router.get("/allUsers", protect, authorize("admin"), getAllUser);

router.get("/:id", getUser);

router.put("/updatedetails", protect, authorize("admin"), updateUser);
//delete
router.delete("delete/:id", protect, authorize("admin"), deleteUser);

module.exports = router;
