// const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const Lot = require("../models/lot.model");

// const s3 = new S3Client({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
// });

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.AWS_BUCKET_NAME,
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, `uploads/lotImages/${file.originalname}`);
//     },
//   }),
// });

// exports.updateLot = async (req, res, next) => {
//   try {
//     upload.single('image')(req, res, async function (err) {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ message: 'File upload failed', error: err });
//       }

//       const { lotNumber } = req.params;
//       const updateLotData = req.body;
//       const uploadedImage = req.file;

//       console.log("image data:", uploadedImage);

//       const updatedLot = await Lot.findOne({ "subdivision.lotNumber": lotNumber });

//       if (!updatedLot) {
//         return res.status(404).json({ message: "Lot not found" });
//       }
//       const array = lotNumber - 1;

//       if (uploadedImage) {
//         // const s3Response = await s3Uploadv3(uploadedImage);

//         // console.log('s3response:', s3Response);

//         updatedLot.subdivision[array].image.push({
//           filename: uploadedImage.originalname,
//           contentType: uploadedImage.mimetype,
//         });
//       }

//       if (updateLotData.totalSqm) {
//         updatedLot.subdivision[array].totalSqm = updateLotData.totalSqm;
//       }
//       if (updateLotData.amountperSquare) {
//         updatedLot.subdivision[array].amountperSquare = updateLotData.amountperSquare;
//       }
//       if (updateLotData.totalAmountDue) {
//         updatedLot.subdivision[array].totalAmountDue = updateLotData.totalAmountDue;
//       }
//       if (updateLotData.status) {
//         updatedLot.subdivision[array].status = updateLotData.status;
//       }

//       // Save the updated lot
//       const savedLot = await updatedLot.save();

//       return res.status(200).json({
//         message: "Lot Information Successfully updated",
//         data: savedLot.subdivision[array],
//       });
//     });

//   } catch (error) {
//     return next(error);
//   }
// };

// // const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');




// const s3 = new S3Client ({

//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
    
// });




// const upload = (bucketName) =>

//       multer({ storage: multerS3({
//         s3,
//         bucket: bucketName,
//         metadata: function (req, file, cb) {
//           cb(null, {fieldName: file.fieldname});
//         },
//         key: function (req, file, cb) {
//           cb(null, `uploads/lotImages/${file.originalname}`);
//         }
//     }) 
// });


// exports.s3Uploadv3 = async (req, res, next) => {
//     console.log(req.files);


// //   const uploadSingle =  upload("aws-bucket-nodejs").single('image');

// // uploadSingle(req, res, err => {
// //     if(err) 
// //     return res.status(400).json({success: false, message: err.message});
// //     console.log(req.file)

//     res.status(200).json({data: req.file})
// // })

// }






// // exports.s3Uploadv3 = async (file) => {
// //   const command = new PutObjectCommand({
// //     Bucket: process.env.AWS_BUCKET_NAME,
// //     Key: `uploads/lotImages/${file.originalname}`,
// //     Body: file.buffer,
// //   });

// //   try {
// //     const response = await client.send(command);
// //     console.log(response);
// //     console.log("IAMHERE");

// //     return response
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// module.exports = {
   
//     upload,
   
//   };