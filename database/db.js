const mongoose = require('mongoose');


const connectToDB = async() => {
  try {
    await mongoose.connect('mongodb+srv://farukidris19:farukidris20@cluster0.gdjdmu0.mongodb.net/');
    console.log('MongoDB connected successfully');
    
  } catch(e) {
    console.log('Database connection failed', e);
    process.exit(1);
  }
};


module.exports = connectToDB;