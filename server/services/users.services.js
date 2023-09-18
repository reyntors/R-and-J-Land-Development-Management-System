const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const auth = require("../middlewares/auth.js");
const jwt = require('jsonwebtoken');

JWT_SECRET_KEY = 'Iron_Dev_Secret_key'

async function login({username, password}, callback){

    try {

            const user = await User.findOne({ username });
  
            if(!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Include user's role in the JWT payload   
            const token =  jwt.sign({ username: user.username, roles: user.roles }, JWT_SECRET_KEY, { expiresIn: '1h' });
            return callback(null, {...user.toJSON(), token});
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