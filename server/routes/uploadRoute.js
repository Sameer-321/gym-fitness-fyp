const express = require("express");
const {
  uploadImage,
  updateProfilePicture,
  deleteProfilePicture,
} = require("../controllers/uploadImage.js");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/img/:user_id", upload.single("file"), uploadImage);
router.put("/img/:user_id", upload.single("file"), updateProfilePicture);
router.delete("/img/:user_id", deleteProfilePicture);

//for trainer form

router.post("/img/multiple/:trainerId", upload.array("files"), (req,res)=>{
    const files = req.files
    if(Array.isArray(files) && files.length>0){
        res.json(files)
    }else{
        console.log("error")
    }
});

module.exports = router;
