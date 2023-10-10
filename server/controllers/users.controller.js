const bcryptjs = require('bcryptjs');
const userService = require("../services/users.services");
const User = require('../models/user.model');
const Inquiry = require('../models/inquiries.model');


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

    const newInquiry = {

      name: user.fullname,
      subject: 'A new user registered',
      context: `${user.fullname}, created a new account.`,
      email: user.email,
      fblink: user.fbAccount,
      phonenumber: user.contactNumber,
      date: user.date

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
  
    try {
      // Check if the user with the specified ID exists and has the "guest" role
      const user = await User.findOne({ userId: id, roles: 'guest' });
      console.log(user);
  
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
      
      await user.save();

      return res.status(200).json({
        message: 'User information updated successfully.',
        data: user,
      });
    } catch (error) {
      return next(error);
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





exports.restrict = (roles) => {
    return (req, res, next) => {
        if(req.user.roles !== roles) {

            return res.status(404).json({
                message: 'You dont have permission to perform this action'
            });
        }
        next();
    }
}
