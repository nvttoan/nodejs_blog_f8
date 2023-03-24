const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    videoId:{type: String, required: true },
    image:{type: String, maxLength: 800 },
    slug: { type: String, slug: 'name'},
  },{
    timestamps: true,
  });

  module.exports = mongoose.model('Course', Course);