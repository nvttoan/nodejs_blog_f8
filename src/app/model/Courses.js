const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'cybertronian',maxLength: 255 },
    description: {type: String, maxLength: 800 },
    age: { type: Number, min: 1, index: true },
    image: {type: String,default: 'default image', maxLength: 255},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Course', Course);