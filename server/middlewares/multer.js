const multer = require('multer');
const path = require('path');

// Define storage for uploaded files
const scannedFilesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/scannedFiles/'); // Destination folder for file uploads
  },
  filename: function (req, file, cb) {
    const originalname = path.parse(file.originalname).name;
    console.log(originalname)
    const extension = path.extname(file.originalname);
    const uniqueName = originalname + extension;
    cb(null, uniqueName); // Unique filename for each uploaded file
  },
});

// Define storage for attachments
const attachmentsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/attachments/'); // Destination folder for attachments
  },
  filename: function (req, file, cb) {
    const originalname = path.parse(file.originalname).name;
    const extension = path.extname(file.originalname);
    const uniqueName = originalname + extension;
    cb(null, uniqueName); // Unique filename for each attachment
  },
});

// Define storage for attachments
const lotImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/lotImages/'); // Destination folder for attachments
  },
  filename: function (req, file, cb) {
    const originalname = path.parse(file.originalname).name;
    const extension = path.extname(file.originalname);
    const uniqueName = originalname + extension;
    cb(null, uniqueName); // Unique filename for each attachment
  },
});


// Create a Multer instance for handling a single file with the field name 'file'
const uploadScannedFile = multer({ storage: scannedFilesStorage }).single('file');

// Create a Multer instance for handling attachments with the field name 'attachment'
const uploadAttachment = multer({ storage: attachmentsStorage }).single('file');

const uploadlotImage = multer({ storage: lotImagesStorage }).single('image');

module.exports = {
  uploadScannedFile,
  uploadAttachment,
  uploadlotImage
};