const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_projectf8_dev');
        console.log('connect succesfully!')
    } catch (error) { 
        console.log('connect false!')
    }
}
module.exports = {connect};