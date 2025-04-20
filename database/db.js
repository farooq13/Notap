require('dotenv').config()
const mongoose = require('mongoose');


const connectToDB = async() => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB connected successfully');
    
  } catch(e) {
    console.log('Database connection failed', e);
    process.exit(1);
  }
};


module.exports = connectToDB;