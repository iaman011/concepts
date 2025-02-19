//hamesa db.js ki file isi tarah bnegi kabhi bhi isme change nhi hoga, hamesa aapki connection string change hogi agar aap db change kr rhe ho toh

//import the files
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env configuration 
dotenv.config();

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            //MONGODB = `connection string`
            useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`error.message`);
        process.exit(1);
    }
}

module.exports = connectDB;