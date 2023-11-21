const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connection events
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB'.bgGreen);
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected'.yellow);
    });

    console.log('Connected to Database'.bgYellow.bgGreen);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
