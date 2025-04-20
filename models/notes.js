const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
    max : [50, "Title cannot be more than 50 character"]
  },
  
  author : {
    type : String,
    required : [true, "Author's name is required"]
  },

  content : {
    type : String,
    required : [true, "Note cannot be empty"]
  },

  createdAt : {
    type : Date,
    default : Date.now()
  }

});


module.exports = mongoose.model('Note', noteSchema);