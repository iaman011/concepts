// Now, If your Backend Application is in running state and indiretly connected to MONGODB and you want to perform CRUD operations on it for this , you have to create MODEL and to create MODEL you have to create SCHEMA

const {Schema, model} = require("mongoose"); //import the mongoose library, also select it from dropdown when write it

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    age:{
        type: Number,
        required: true
    },
    weight: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserModel = model("User", userSchema)

//export is mandatory part iske baad apko iski kahi bhi zaroorat pdegi toh you have to just import it
module.exports = UserModel