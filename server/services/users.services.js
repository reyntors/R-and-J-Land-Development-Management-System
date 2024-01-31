const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



async function login({username, password, roles}, callback){
            
   
            const user = await User.findOne({ username });
             
            
            if (username !== user.username) {

                return callback({ message: 'Invalid username'});
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
                    expiresIn: '24h' 
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
                // Generate token for the newly registered user
                const token = jwt.sign({ 
                    username: user.username, 
                    roles: user.roles 
                }, 
                process.env.JWT_SECRET_KEY, { 
                    expiresIn: '24h' 
                });
                return callback(null, {...response.toJSON(), token});
            })
            .catch((error) => {
                return callback(error);
            });
        }

module.exports = {
    login,
    register,
};