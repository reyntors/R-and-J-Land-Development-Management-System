const bcryptjs = require('bcryptjs');
const userService = require("../services/users.services");
const User = require('../models/user.model');
const Inquiry = require('../models/inquiries.model');

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
      date: user.date,
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
    const { id } = req.params;
    const updateData = req.body;

    console.log(updateData);

  
    try {
      // Check if the user with the specified ID exists and has the "guest" role
      const user = await User.findOne({ userId: id, roles: 'guest' });
     
      if (!user) {
        return res.status(404).json({
          message: 'Guest user not found or you do not have permission to update this user.',
        });
      }

      if (updateData.fullname) {
        user.fullname = updateData.fullname;
      }
      
      if (updateData.contactNumber) {
        user.contactNumber = updateData.contactNumber;
      }
      
      if (updateData.homeAddress) {
        user.homeAddress = updateData.homeAddress;
      }
      
      if (updateData.fbAccount) {
        user.fbAccount = updateData.fbAccount;
      }
      
      if (updateData.username) {
        user.username = updateData.username;
      }
      
      if (updateData.email) {
        user.email = updateData.email;
      }

      if (updateData.civilStatus) {

          user.additionalInfo.civilStatus = updateData.civilStatus;
        }

      if (updateData.spouseName) {
          user.additionalInfo.spouseName = updateData.spouseName;
        }

      if (updateData.occupation) {
          user.additionalInfo.occupation = updateData.occupation;
        }

      if (updateData.monthlyGrossIncome) {
          user.additionalInfo.monthlyGrossIncome = updateData.monthlyGrossIncome;
        }

        if (updateData.buyerSourceOfIncome) {
          
          user.additionalInfo.buyerSourceOfIncome = updateData.buyerSourceOfIncome;
        }

        if (updateData.typeOfEmployment) {
         
          user.additionalInfo.typeOfEmployment = updateData.typeOfEmployment;
        }

        if (updateData.employer) {
         
          user.additionalInfo.employer = updateData.employer;
        }

        if (updateData.employerAddress) {
         
          user.additionalInfo.employerAddress = updateData.employerAddress;
        }

        if (updateData.grossSalary) {
        
          user.additionalInfo.grossSalary = updateData.grossSalary;
        }

        if (updateData.businessName) {
          
          user.additionalInfo.businessName = updateData.businessName;
        }

        if (updateData.businessAddress) {
         
          user.additionalInfo.businessAddress = updateData.businessAddress;
        }

        if (updateData.businessMonthlyIncome) {
         
          user.additionalInfo.businessMonthlyIncome = updateData.businessMonthlyIncome;
        }

       
      
      await user.save();

      return res.status(200).json({
        message: 'User information updated successfully.',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({message: 'User update failed!'})
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