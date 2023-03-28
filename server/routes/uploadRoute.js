const express = require("express");
const { uploadImage } = require("../controllers/uploadImage.js");
const upload = require('../middleware/upload');


const router = express.Router();

router.post("/img/:user_id",upload.single('file'), uploadImage);

module.exports = router;
