const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: String,
  upvotes: String,
  comments:[{
    username: String,
    text:String
  }],
});

module.exports = mongoose.model('articles', postSchema);