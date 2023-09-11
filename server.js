const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const User = require('./models/userModel'); // Import the User model

// Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Secret key for JWT
const JWT_SECRET = 'goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu';


//routes

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
    
//     // Find the user by username or email
//     User.findOne({ $or: [{ username }, { email: username }] })
//         .exec() // Use the .exec() method to return a Promise
//         .then(user => {
//             if (!user) {
//                 return res.status(401).json({ success: false, message: 'Authentication failed' });
//             }
            
//              // Compare the provided password with the stored hashed password
//              bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err || !isMatch) {
//                     return res.status(401).json({ success: false, message: 'Authentication failed' });
//                 }

//                 // Generate a JWT token with user information
//                 const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
//                     expiresIn: '1h' // Token expiration time (e.g., 1 hour)
//                 });

//                 // Send the JWT token to the frontend
//                 res.json({ success: true, message: 'Authentication successful', token });
//             });
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ success: false, message: 'Internal server error' });
//         });
// });



app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`${username} is trying to login ..`);
  
    if (username === "admin" && password === "admin") {
      return res.json({
        token: jwt.sign({ user: "admin" }, JWT_SECRET),
      });
    }
  
    return res
      .status(401)
      .json({ message: "The username and password your provided are invalid" });
  });

// Create a route to handle user registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    User.findOne({ $or: [{ username }, { email }, {password}] })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ success: false, message: 'Username or email already exists' });
            }

            // Hash the password before saving it to the database
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return res.status(500).json({ success: false, message: 'Internal server error' });
                }

                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ success: false, message: 'Internal server error' });
                    }

                    // Create a new user document and save it to the database
                    const newUser = new User({
                        username,
                        email,
                        password: hash // Store the hashed password
                    });

                    newUser.save()
                        .then(() => {
                            res.status(201).json({ success: true, message: 'User registered successfully' });
                        })
                        .catch(err => {
                            console.error(err);
                            res.status(500).json({ success: false, message: 'Internal server error' });
                        });
                });
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        });
});





const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://reyntors:generalaccount@reynardapi.qegt2hm.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
        console.log('Connected!')
        app.listen(PORT, () => {
            console.log(`Server is listen on PORT ${PORT}`)
        })
    }).catch(error => {
        console.log(error);
    })
