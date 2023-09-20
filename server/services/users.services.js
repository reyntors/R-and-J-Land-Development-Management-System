const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const auth = require("../middlewares/auth.js");
const jwt = require('jsonwebtoken');



async function login({username, password}, callback){

    try {

            const user = await User.findOne({ username });
  
            if(!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            
            if (!isPasswordValid) {
                return callback({ message: 'Invalid password' });
            }

            // Include user's role in the JWT payload   
            const token =  jwt.sign({ 
                username: user.username, 
                roles: user.roles }, 
                process.env.JWT_SECRET_KEY, { 
                    expiresIn: '1h' 
                });
            callback(null, {...user.toJSON(), token});
        } catch (error) {
            // Handle other errors and pass them to the callback
            
            callback({ error: 'Login failed' });
        }
}
async function register(params, callback) {
    if(params.username === undefined) {
        return callback({ message: "Username Required"});
    }

    const user = new User(params);
    user.save()
    .then((response) => {
        return callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });
}

module.exports = {
    login,
    register,
};