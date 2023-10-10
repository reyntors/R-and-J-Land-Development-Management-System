const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");


const s3 = new S3Client({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});



const uploadScannedFile = multer({storage: multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `uploads/scannedFiles/${file.originalname}`);
  },
}),
}).single('file');


const uploadAttachment = multer({storage: multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `uploads/attachments/${file.originalname}`);
  },
}),
}).single('file');



const uploadForms = multer({storage: multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `uploads/forms/${file.originalname}`);
  },
}),
}).single('file');




const uploadlotImage = multer({storage: multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `uploads/lotImages/${file.originalname}`);
  },
}),
}).single('image');




module.exports = {
  uploadScannedFile,
  uploadAttachment,
  uploadlotImage,
  uploadForms,
 
};