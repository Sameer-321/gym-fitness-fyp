const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // specify the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // specify the file name
  },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true); // accept PDF files
    } else {
      cb(new Error("Please upload only PDF files"), false);
    }
  };
  
const uploadPDF = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
  fileFilter: fileFilter,
});

module.exports = uploadPDF;
