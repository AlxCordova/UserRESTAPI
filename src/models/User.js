const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fname: String,
    lname: String,
    avatar: String
});

module.exports = model('User', userSchema);