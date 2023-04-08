const express = require("express");
const { uploadImage,updateProfilePicture,deleteProfilePicture } = require("../controllers/uploadImage.js");
const upload = require('../middleware/upload');


const router = express.Router();

router.post("/img/:user_id",upload.single('file'), uploadImage);
router.put("/img/:user_id",upload.single('file'), updateProfilePicture);
router.delete("/img/:user_id", deleteProfilePicture);

module.exports = router
