const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
    username: String,
    email: String,
    password: String, // Store the hashed password
});

// Hash the password before saving
userSchema.pre('save', async function () {
    const user = await bcryot.genSalt(10)
    this.password = await bcrypt.hash(this.password, user)
})


// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;
