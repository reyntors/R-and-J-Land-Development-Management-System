const bcryptjs = require('bcryptjs');
const userService = require("../services/users.services");
const User = require('../models/user.model');
const Inquiry = require('../models/inquiries.model');
const nodemailer = require('nodemailer');
const UserUpdateRequest = require('../models/userUpdateRequest.model');


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

    const userRequest = new UserUpdateRequest({

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
       name: user.fullname,
       subject: 'Request to update the data',
       context: `${user.fullname}, Request to update data:   ${userRequest.updatedData}`,
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

      sendUpdateResponseEmail( user.fullname, 'reyntors2@gmail.com', 'Update Request Received');

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




  
exports.approveUserUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { isApproved } = req.body;

  console.log(isApproved);
  console.log(id);

  try {
    // Find the user update request with the specified ID
    const updateRequest = await UserUpdateRequest.findOne({userId: id});

    

    if (!updateRequest) {
      return res.status(404).json({ message: 'User update request not found.' });
    }

    // Update the approval status
    updateRequest.approvalStatus = isApproved ? 'approved' : 'rejected';

    await updateRequest.save();

    if(isApproved === 'approved'){

      const user = await User.findOne({userId: id});

      if(!user){
        res.status(404).json({message: 'user is not found'})
      }

      if (updateRequest.updatedData.fullname) {
        
        user.profileDetails.fullname = updateRequest.updatedData.fullname;
      }
      
      if (updateRequest.updatedData.contactNumber) {
        
        user.profileDetails.contactNumber = updateRequest.updatedData.contactNumber;
      }
      
      if (updateRequest.homeAddress) {
        user.profileDetails.homeAddress = updateRequest.updatedData.homeAddress;
      }
      
      if (updateRequest.updatedData.fbAccount) {

        user.profileDetails.fbAccount = updateRequest.updatedData.fbAccount;
      }
      
      if (updateRequest.updatedData.username) {
        user.username = updateRequest.updatedData.username;
      }
      
      if (updateRequest.updatedData.email) {
        user.email = updateRequest.updatedData.email;
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

      await user.save();

      await UserUpdateRequest.deleteOne({ userId: id });
      // const recipientEmail = user.email; // Use the user's email address
      const subject = isApproved ? 'Update Request Approved' : 'Update Request Rejected';
      sendUpdateApprovedResponseEmail(user.fullname, 'reyntors2@gmail.com', subject);
  
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