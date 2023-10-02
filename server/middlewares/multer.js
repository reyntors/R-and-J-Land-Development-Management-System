const express = require('express');

const app = express();



const multer = require('multer');
const path = require('path');

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Unique filename for each uploaded file
  },
});



// Create a Multer instance for handling a single file with the field name 'file'
const upload = multer({ storage: storage }).single('file');





module.exports = {
  upload
};