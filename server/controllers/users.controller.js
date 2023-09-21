const bcryptjs = require('bcryptjs');
const userService = require("../services/users.services");
const User = require('../models/user.model');



exports.register = (req, res, next) => {
    const {password} = req.body;
    const salt = bcryptjs.genSaltSync(10);

    req.body.password = bcryptjs.hashSync(password, salt);

    userService.register(req.body, (error, result) => {
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: `Hello ${req.body.username}! You successfully registered!`,
            data: result,
        });
    });
};

exports.login = (req, res, next) => {
    const {username, password} = req.body;

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
  }


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
