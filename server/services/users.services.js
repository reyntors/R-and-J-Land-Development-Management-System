const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



async function login({username, password, roles}, callback){
            
   
            const user = await User.findOne({ username });
             
            
            if (user === null) {

                return callback({ message: 'Invalid username or password'});
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            
            if (!isPasswordValid) {
                return callback({ message: 'Invalid username or password' });
            }

            

            // Include user's role in the JWT payload   
            const token =  jwt.sign({ 
                username: user.username, 
                roles: user.roles }, 
                process.env.JWT_SECRET_KEY, { 
                    expiresIn: '1h' 
                });
            callback(null, {...user.toJSON(), token});
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