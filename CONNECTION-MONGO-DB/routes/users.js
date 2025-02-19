// yaha hum different different routes create krenge aur un different routes se ham different CRUD operation perfrom ho rha hoga

const express = require('express')
const router = express.Router();

const User = require('../MODEL/userModel');

//routes

// CRUD operations

// View/Read

router.get('/users', async(req,res) =>{
    // yaha humne router mein fetch krne ke liye get send kiya hai
    // jab bhi aapke pass iss route pe res ayegi, aap db se saare user ko le ke ayenge, res mein saare user ko send kr denge, iss se jo bhi user jo system pe wo view kr lega 
    // iss req ko ham kis tarah handle krna chahte hai usse try block mein likhenge
    try{
        const users = await User.find();  //to fetch the entry using find() fuction 
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// Create

// yaha humne route mein create krne ke liye post send kiya hai
router.post('/users', async(req,res) =>{
    try{
        // isme hamare pass koi data hai usko nikalenge aur uss data ko mogodb ke andar insert kr denge 
        const {name, age, weight} = req.body;
        // yaha aapne ek nayi entry(newUser) create kr li hai
        const newUser = new User({name,age,weight});
        // yaha aapne new entry(newUser) ko save kr liya hai
        await newUser.save();  

           // Send a response back to the client
           res.status(201).json({
            success: true,
            message: "User created successfully!",
            user: newUser
        });
    }
    catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});



module.exports = router;
