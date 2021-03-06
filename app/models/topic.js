// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var topicSchema = mongoose.Schema({
  name: String,
  category: String,
  time: Date,
  startedBy: String, //uid
  desc: String,
  opinion: String,
  comments: [{
    uid: String,
    comment: String,
    time: Date
  }],
  commentsCount: Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Topic', topicSchema);
