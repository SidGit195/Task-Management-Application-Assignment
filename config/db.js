const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;