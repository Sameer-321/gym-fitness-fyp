const express = require("express");
const { uploadImage } = require("../controllers/uploadImage.js");

const router = express.Router();

router.post("/img", uploadImage);

module.exports = router;
