const bcryptjs = require('bcryptjs');
const userService = require("../services/users.services");
const User = require('../models/user.model');
const Inquiry = require('../models/inquiries.model');
const nodemailer = require('nodemailer');
const UserUpdateRequest = require('../models/userUpdateRequest.model');
const {uploadProfileImage} = require('../middlewares/multer')
const RecoveryCode = require('../models/userRecoveryCode.model');


async function generateInquiryId() {
  // Find all documents and their inquiries array
  const results = await Inquiry.find();

  let maxInquiryId = 0;

  // Iterate through the results to find the maximum inquiryId
  results.forEach((result) => {
    if (result.inquiries && result.inquiries.length > 0) {
      result.inquiries.forEach((inquiry) => {
        maxInquiryId = Math.max(maxInquiryId, inquiry.inquiryId);
      });
    }
  });

  // Increment the maximum inquiryId found or initialize to 1 if none exists
  const nextInquiryId = maxInquiryId + 1 || 1;

  return nextInquiryId;
}

async function generateRequestId() {
  // Find all documents and their inquiries array
  const results = await UserUpdateRequest.find();

  let maxRequestId = 0;

  // Loop through the results to find the maximum requestId
  results.forEach((result) => {
    if (result.requestId > maxRequestId) {
      maxRequestId = result.requestId;
    }
  });

  // Increment the maximum requestId by 1 to generate a new unique requestId
  const newRequestId = maxRequestId + 1;

  return newRequestId;
}



//register new account
exports.register = async (req, res, next) => {
    const {password} = req.body;

    const salt = bcryptjs.genSaltSync(10);

    req.body.password = bcryptjs.hashSync(password, salt);

    userService.register(req.body, async (error, result) => {
        if(error) {
            return next(error);
        }
        
try {
    const user = await User.findOne({ username: req.body.username });

  


    const  userProfileData = {

      fullname: user.fullname,
      email: user.email,
      contactNumber: user.contactNumber,
      birthday: user.birthday,
      address: user.homeAddress,

    }

    
    user.profileDetails =  userProfileData;

    

    await user.save();


      //generate date
    const date = new Date()
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;


        // Generate inquiryId
    const inquiryId = await generateInquiryId();

    const newInquiry = {
      inquiryId,
      name: user.fullname,
      subject: 'A new user registered',
      context: `${user.fullname}, created a new account.`,
      email: user.email,
      fblink: user.fbAccount,
      phonenumber: user.contactNumber,
      date: formattedDate,
      };

      const inquiries = await Inquiry.findOne()

      if (!inquiries) {
          // If inquiries object doesn't exist, create it
          const newInquiries = new Inquiry({ inquiries: [newInquiry] });
          await newInquiries.save();
      }else{

          inquiries.inquiries.push(newInquiry);
           //save to inquiries
          await inquiries.save();

      }
    
      return res.status(200).send({
        message: `Hello ${req.body.username}! You successfully registered!`,
        data: result,
    });
  }catch(error) {
    return next(error);
  }
});

};

exports.login = async (req, res, next) => {
    const {username, password, roles} = req.body;


    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send({
          message: 'Invalid username. Please try again.',
      });
  }

    if (!roles){
        return res.status(402).send({
            message: 'Please provide a roles',
        });
    }

    if (roles !== user.roles ) {
        return res.status(400).send({
            message: 'Invalid roles.',
        });
    }
    

    

    userService.login({ username, password}, (error, result) => {
        
        if (error) {

        return res.status(401).send({
                message: 'Invalid username or password. Please try again'
            });
        }
        return res.status(200).send({
            message: `Hello ${req.body.username}! You successfully Login`,
            data: result,
        });
    });
};

exports.userProfile = (req, res, next) => {
    
    return res.status(200).json({ message: "Authorized User!"});
};

exports.getUserDetails = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {  
            
            const user = await User.findOne({userId: id});

            if (!user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }

            return res.status(200).json({
                message:'User details',
                data: user
            });
        } else {
            const activeUsers = await User.find();


            return res.status(200).json({
                message: 'All active users details',
                data: activeUsers
            });
        }

    } catch (error) {
        return next(error);
    }
  };

  exports.updateUser = async (req, res, next) => {
  
    const updatedUserData = req.body;
    const username = req.user.username

    try {
 
      // Check if the user with the specified ID exists and has the "guest" role
      const user = await User.findOne({username});
     
      if (!user) {
        return res.status(404).json({
          message: 'Guest user not found or you do not have permission to update this user.',
        });
      }

            // Generate RequestId
    const requestId = await generateRequestId(); 

    const userRequest = new UserUpdateRequest({

      requestId,
      userId: user.userId,
      updatedData: updatedUserData,

    });


    
      // Save the request to the database
      await userRequest.save();

      //generate date
      const date = new Date()
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;


           // Generate inquiryId
     const inquiryId = await generateInquiryId();


     const newInquiry = {
       inquiryId, 
       requestId: userRequest.requestId,
       approvalStatus: userRequest.approvalStatus,
       userId: user.userId,
       name: user.fullname,
       subject: 'Request to update the data',
       otherContext: {
        title: `${user.fullname}, Request to update the data:`,
        ...updatedUserData
       },
       email: user.email,
       fblink: user.fbAccount,
       phonenumber: user.contactNumber,
       date: formattedDate,
       };

      

       const inquiries = await Inquiry.findOne()

       if (!inquiries) {
           // If inquiries object doesn't exist, create it
           const newInquiries = new Inquiry({ inquiries: [newInquiry] });
           await newInquiries.save();
       }else{

           inquiries.inquiries.push(newInquiry);
            //save to inquiries
           await inquiries.save();

       }

      sendUpdateResponseEmail( user.fullname, user.email, 'Update Request Received');

      res.status(200).json({message:'Update request submitted and pending approval.'});
  } catch (error) {

      console.log(error)
      res.status(500).send('Error submitting update request.');
  }
};
      
  
// Function to send an email response
function sendUpdateResponseEmail(fullname, recipientEmail, subject) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'reyntors2@gmail.com', 
      pass: 'lkwo goeh mdbh afug', 
    },
  });

   // Define the HTML content for the email
   const htmlContent = `
   <p>Hello ${fullname},</p>
   
   <p>Your update request has been received and is pending approval.</p>


   <br>
   <br>
   <br>


   
   <p>Best Regards Developer,</p>
   <p>Thank you.</p>

    <img src="https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/logo2.png" alt="Your Image" width="220" height="100">
 `;



 const mailOptions = {
   from: 'reyntors2@gmail.com',
   to: recipientEmail,
   subject: subject,
   html: htmlContent, // Use HTML content with an image
 };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email sending error:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Function to send an email response
function sendUpdateApprovedResponseEmail(fullname, recipientEmail, subject) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'reyntors2@gmail.com', 
      pass: 'lkwo goeh mdbh afug', 
    },
  });

   // Define the HTML content for the email
   const htmlContent = `
   <p>Hello ${fullname},</p>
   
   <p>Your update request has been approved.</p>


   <br>
   <br>
   <br>


   
   <p>Best Regards Developer,</p>
   <p>Thank you.</p>

    <img src="https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/logo2.png" alt="Your Image" width="220" height="100">
 `;


 const mailOptions = {
   from: 'reyntors2@gmail.com',
   to: recipientEmail,
   subject: subject,
   html: htmlContent, // Use HTML content with an image
 };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email sending error:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const restrictToManagement = (req, res, next) => {
  if (req.user.role !== 'management') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

const executeForManagement = (req, res, callback) => {
  restrictToManagement(req, res, () => {
    callback();
  });
};

exports.approveUserUpdate = async (req, res, next) => {
  const { userId, requestId, inquiryId } = req.params;
  const { isApproved } = req.body;

  const newInquiryId = Number(inquiryId);

  console.log(typeof(newInquiryId));

  try {
    // Find the user update request with the specified ID
    // const updateRequest = await UserUpdateRequest.findOne({userId: id});
  
    // Find the user by email and verify the recovery code
  const user = await User.findOne({ userId });

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

      // Check if the recovery code matches
  const updateRequest = await UserUpdateRequest.findOne({ userId: user.userId, requestId: requestId });

  console.log(updateRequest);
  
  if (!updateRequest || updateRequest.userId !== user.userId) {

    console.log(!updateRequest || updateRequest.userId !== user.userId)
    
    return res.status(400).json({ message: 'Request update to this user is not found.' });
  }



    if(isApproved === 'approved'){

      const user = await User.findOne({userId: userId});

      if(!user){
        res.status(404).json({message: 'user is not found'})
      }

      if (updateRequest.updatedData.fullname) {
        
        user.profileDetails.fullname = updateRequest.updatedData.fullname;
      }
      
      if (updateRequest.updatedData.contactNumber) {
        
        user.profileDetails.contactNumber = updateRequest.updatedData.contactNumber;
      }
      
      if (updateRequest.updatedData.address) {
        user.profileDetails.address = updateRequest.updatedData.address;
      }

      if (updateRequest.updatedData.birthday) {
        user.profileDetails.birthday = updateRequest.updatedData.birthday;
      }
      
      
      if (updateRequest.updatedData.fbAccount) {

        user.profileDetails.fbAccount = updateRequest.updatedData.fbAccount;
      }
      

      if (updateRequest.updatedData.civilStatus) {

          user.profileDetails.civilStatus = updateRequest.updatedData.civilStatus;
      }

      if (updateRequest.updatedData.spouseName) {
        user.profileDetails.spouseName = updateRequest.updatedData.spouseName;
        }

      if (updateRequest.updatedData.occupation) {
        user.profileDetails.occupation = updateRequest.updatedData.occupation;
        }

      if (updateRequest.updatedData.monthlyGrossIncome) {
        user.profileDetails.monthlyGrossIncome = updateRequest.updatedData.monthlyGrossIncome;
        }

      if (updateRequest.updatedData.buyerSourceOfIncome) {
          
        user.profileDetails.buyerSourceOfIncome = updateRequest.updatedData.buyerSourceOfIncome;
        }

      if (updateRequest.updatedData.typeOfEmployment) {
         
        user.profileDetails.typeOfEmployment = updateRequest.updatedData.typeOfEmployment;
        }

      if (updateRequest.updatedData.employer) {
         
        user.profileDetails.employer = updateRequest.updatedData.employer;
        }

      if (updateRequest.updatedData.employerAddress) {
         
        user.profileDetails.employerAddress = updateRequest.updatedData.employerAddress;
        }

      if (updateRequest.updatedData.grossSalary) {
        
        user.profileDetails.grossSalary = updateRequest.updatedData.grossSalary;
        }

      if (updateRequest.updatedData.businessName) {
          
        user.profileDetails.businessName = updateRequest.updatedData.businessName;
        }

      if (updateRequest.updatedData.businessAddress) {
         
        user.profileDetails.businessAddress = updateRequest.updatedData.businessAddress;
        }

      if (updateRequest.updatedData.businessMonthlyIncome) {
         
        user.profileDetails.businessMonthlyIncome = updateRequest.updatedData.businessMonthlyIncome;
        }

        executeForManagement(req, res, () => {
        if (updateRequest.updatedData.legitimate) {
          user.legitimate = true;
        }
      });


      await user.save();

      const inquiry = await Inquiry.findOne({'inquiries.inquiryId': newInquiryId});

      if (inquiry) {

       
        const matchingInquiry = inquiry.inquiries.find(item => item.inquiryId === newInquiryId);


        if (matchingInquiry) {
          

         matchingInquiry.approvalStatus = isApproved;

         await inquiry.save()


        } else {
          console.log('Inquiry not found for the specified inquiryId.');
        }
 
       
      }else {
        console.log('No matching inquiries found.');
      }


         // Update the approval status
      updateRequest.approvalStatus = isApproved ? 'approved' : 'rejected';

    
      await updateRequest.save();


      await UserUpdateRequest.deleteOne({ userId: userId, requestId: requestId });

      const subject = isApproved ? 'Update Request Approved' : 'Update Request Rejected';
      sendUpdateApprovedResponseEmail(user.fullname, user.email, subject);
  
    }else{

      const inquiry = await Inquiry.findOne({'inquiries.inquiryId': newInquiryId});

      const matchingInquiry = inquiry.inquiries.find(item => item.inquiryId === newInquiryId);

      matchingInquiry.approvalStatus = isApproved;

      await inquiry.save()
    }

   
    return res.status(200).json({ message: 'User update request has been ' + (isApproved ? 'approved' : 'rejected') });
  } catch (error) {

    console.log(error)
    return res.status(500).json({ message: 'Approval process failed!' });
  }
};



  exports.deleteUser = async (req, res, next) => {
    const { id } = req.params; // Use userId instead of id
  
    try {
      // Check if the user with the specified ID exists and has the "guest" role
      const user = await User.findOne({ userId: id, roles: 'guest' });
      console.log(user);
  
      if (!user) {
        return res.status(404).json({
          message: 'Guest user not found or you do not have permission to delete this user.',
        });
      }
  
      // Delete the user from the database
      await User.deleteOne({ userId: id });
  
      return res.status(200).json({
        message: 'User deleted successfully.',
      });
    } catch (error) {
      return next(error);
    }
  };


  exports.getAccountSettings = async(req, res, next) =>{

      const username = req.user.username;

      try {

      const user = await User.findOne({username});

      if(!user){

        return res.status(404).json({message: 'User not found!'});

      }


      const getAccountSettings = {};
      

      getAccountSettings.profilePicture = user.profilePicture.url
      getAccountSettings.userId = user.userId;
      getAccountSettings.email = user.email;
      getAccountSettings.username = user.username;
      getAccountSettings.password = user.password;

      return res.status(200).json({data: getAccountSettings});
    
      }catch(error){

        throw error
      }  


  };


  exports.updateUserAccount = async(req, res, next) =>{
 
    try {

      uploadProfileImage(req, res, async function (err) {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'File upload failed', error: err });
        }

          const username = req.user.username;
          const image = req.file;
          const updateData = req.body;
          const {recoveryCode} = req.body;

          console.log(updateData);

          if(!updateData){

            return res.status(404).json({message: 'The field is empty! please provide the input field'})

          }

          const user = await User.findOne({username});

          if(!user){

            return res.status(404).json({message: 'user not found'});
          }


          if (image) {

            const fileData = {
              url: image.location,
              
            };
 
            user.profilePicture.url = fileData.url

          }

          // if(updateData.username){

          //   user.username = updateData.username;

          // }

          if(updateData.username || updateData.password){

              // Generate a recovery code
          const recoveryCode = generateRecoveryCode();


          //generate date
        const date = new Date()
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;



        const userRequestCode = new RecoveryCode({
         
          userId: user.userId,
          code: recoveryCode,
          timestamp: formattedDate,
          password: updateData.password,
          username: updateData.username

        });

        //save into to the database
          await userRequestCode.save();


          // Send the update code via email
          const subject = 'User Update';

          sendRecoveryResponseEmail(user.fullname, user.email, subject, recoveryCode);

          
         return res.status(200).json({ message: 'Update code sent. Check your email.' });


          
          }

          if(recoveryCode){

                  
            // Check if the recovery code matches
            const savedRecoveryCode = await RecoveryCode.findOne({ code: recoveryCode, userId: user.userId });

            if (!savedRecoveryCode || savedRecoveryCode.userId !== user.userId) {
              
              return res.status(400).json({ message: 'Invalid recovery code.' });
            }


              if(savedRecoveryCode.password){
                
                  const salt = bcryptjs.genSaltSync(10);

                  const password = bcryptjs.hashSync(savedRecoveryCode.password, salt);


                   user.password = password;

                  }
              if(savedRecoveryCode.username){

                user.username = savedRecoveryCode.username;

              }
            
          }

          await user.save();

          await RecoveryCode.deleteOne({ userId: user.userId, code: recoveryCode });

          return res.status(200).json({message: `Hello ${user.username}, your account updated successfully`});

          

    });
      
    } catch (error) {

      console.log(error)

      throw error;
      
    }


  }

  // Generate a random 6-digit recovery code
function generateRecoveryCode() {
  return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit code
}



  exports.forgotPassword = async(req, res) => {


    const emailData = req.body.email;
   

    try{
        const user = await User.findOne({email: emailData});

        if(!user){

          return res.status(404).json({message: 'This email is not exist in our system'});

        }else{

          

          // Generate a recovery code
          const recoveryCode = generateRecoveryCode();


          //generate date
        const date = new Date()
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;



        const userRequestCode = new RecoveryCode({
         
          userId: user.userId,
          code: recoveryCode,
          timestamp: formattedDate

        });

        //save into to the database
          await userRequestCode.save();

          // Send the recovery code via email
          const subject = 'Password Recovery';

          sendRecoveryResponseEmail(user.fullname, user.email, subject, recoveryCode);

          return res.status(200).json({ message: 'Recovery code sent. Check your email.' });


      }
    }catch(error){

      console.log(error)

      return res.status(500).json({message: 'Internal Server Error'});
    }

  }


  // Function to send an email response
function sendRecoveryResponseEmail(fullname, recipientEmail, subject, recoveryCode) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'reyntors2@gmail.com', 
      pass: 'lkwo goeh mdbh afug', 
    },
  });

   // Define the HTML content for the email
   const htmlContent = `
   <p>Hello ${fullname},</p>
   
   <p>Your recovery code is <strong>${recoveryCode}</strong>.</p>


   <br>
   <br>
   <br>


   
   <p>Best Regards Developer,</p>
   <p>Thank you.</p>

    <img src="https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/logo2.png" alt="Your Image" width="220" height="100">
 `;


 const mailOptions = {
   from: 'reyntors2@gmail.com',
   to: recipientEmail,
   subject: subject,
   html: htmlContent, // Use HTML content with an image
 };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email sending error:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


//resetPassword

exports.resetPassword = async(req, res) =>{

  try{

  const { email, recoveryCode, password } = req.body;

  // Find the user by email and verify the recovery code
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Check if the recovery code matches
  const savedRecoveryCode = await RecoveryCode.findOne({ code: recoveryCode, userId: user.userId });

  if (!savedRecoveryCode || savedRecoveryCode.userId !== user.userId) {
    
    return res.status(400).json({ message: 'Invalid recovery code.' });
  }
  
  const salt = bcryptjs.genSaltSync(10);

  const newPassword = bcryptjs.hashSync(password, salt);


  user.password = newPassword;

  await user.save();


  // Delete the used recovery code
  await savedRecoveryCode.remove();

  // Send the recovery code via email
  const subject = 'Password Changed Successful ';

  sendRecoverySuccessResponseEmail(user.fullname, user.email, subject);

  return res.status(200).json({ message: 'Password reset successfully.' });

  }catch(error){

    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }


};


  // Function to send an email response
  function sendRecoverySuccessResponseEmail(fullname, recipientEmail, subject, recoveryCode) {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'reyntors2@gmail.com', 
        pass: 'lkwo goeh mdbh afug', 
      },
    });
  
     // Define the HTML content for the email
     const htmlContent = `
     <p>Hello ${fullname},</p>
     
     <p>Your password  changed successfully!.</p>
  
  
     <br>
     <br>
     <br>
  
  
     
     <p>Best Regards Developer,</p>
     <p>Thank you.</p>
  
      <img src="https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/logo2.png" alt="Your Image" width="220" height="100">
   `;
  
  
   const mailOptions = {
     from: 'reyntors2@gmail.com',
     to: recipientEmail,
     subject: subject,
     html: htmlContent, // Use HTML content with an image
   };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Email sending error:', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }


  exports.updateUserDetails = async (req, res) => {

    const {id} = req.params;

    const requestUpdateData = req.body;


    try {


    const user = await User.findOne({userId: id});


    if (requestUpdateData.fullname) {
        
      user.profileDetails.fullname = requestUpdateData.fullname;
    }
    
    if (requestUpdateData.contactNumber) {
      
      user.profileDetails.contactNumber = requestUpdateData.contactNumber;
    }
    
    if (requestUpdateData.address) {
      user.profileDetails.address = requestUpdateData.address;
    }

    if (requestUpdateData.birthday) {
      user.profileDetails.birthday = requestUpdateData.birthday;
    }
    
    
    if (requestUpdateData.fbAccount) {

      user.profileDetails.fbAccount = requestUpdateData.fbAccount;
    }
    

    if (requestUpdateData.civilStatus) {

        user.profileDetails.civilStatus = requestUpdateData.civilStatus;
    }

    if (requestUpdateData.spouseName) {
      user.profileDetails.spouseName = requestUpdateData.spouseName;
      }

    if (requestUpdateData.occupation) {
      user.profileDetails.occupation = requestUpdateData.occupation;
      }

    if (requestUpdateData.monthlyGrossIncome) {
      user.profileDetails.monthlyGrossIncome = requestUpdateData.monthlyGrossIncome;
      }

    if (requestUpdateData.buyerSourceOfIncome) {
        
      user.profileDetails.buyerSourceOfIncome = requestUpdateData.buyerSourceOfIncome;
      }

    if (requestUpdateData.typeOfEmployment) {
       
      user.profileDetails.typeOfEmployment = requestUpdateData.typeOfEmployment;
      }

    if (requestUpdateData.employer) {
       
      user.profileDetails.employer = requestUpdateData.employer;
      }

    if (requestUpdateData.employerAddress) {
       
      user.profileDetails.employerAddress = requestUpdateData.employerAddress;
      }

    if (requestUpdateData.grossSalary) {
      
      user.profileDetails.grossSalary = requestUpdateData.grossSalary;
      }

    if (requestUpdateData.businessName) {
        
      user.profileDetails.businessName = requestUpdateData.businessName;
      }

    if (requestUpdateData.businessAddress) {
       
      user.profileDetails.businessAddress = requestUpdateData.businessAddress;
      }

    if (requestUpdateData.businessMonthlyIncome) {
       
      user.profileDetails.businessMonthlyIncome = requestUpdateData.businessMonthlyIncome;
      }

    await user.save();

    return res.status(200).json({message: `User ${user.username}, sucessfully updated`})


    }catch(error){

      return res.status(500).json({message: 'Failed to update the data'})
    }


  };
  

  exports.restrict = (allowedRoles) => {
    return (req, res, next) => {
      const userRoles = req.user.roles;

      console.log(userRoles);
  
      // Check if the user has any of the allowed roles
      const isAllowed = allowedRoles.some((role) => userRoles.includes(role));

      console.log(isAllowed);
  
      if (!isAllowed) {
        return res.status(404).json({
          message: 'You do not have permission to perform this action',
        });
      }
  
      next();
    };
  };