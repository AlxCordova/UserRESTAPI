const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb+srv://flutter:flutter123@cluster0-zjtqq.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        // Warning in MongoClient constructor
        useUnifiedTopology: true
    });
    console.log('Database Connected');
};

module.exports = { connect };