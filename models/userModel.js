const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


//Define the USer schema
const userSchema = new Schema({
    username: String,
    email: String,
    password: String, //Store the hashed password
});

// Hash the password before saving
userSchema.pre('save', function(next) {
    const user = this;


    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});


// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;