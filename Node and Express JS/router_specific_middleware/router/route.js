const express = require('express')
const router = express.Router()

//middlewares 
const authentication = function(req, res, next){
    console.log("I am inside authentication middleware");

    //adding a dummy user
    req.user={userId:1, role:"admin"};

    if(req.user){
        //if a valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        //if not a valid user
        res.json({
            success:false,
            message:"not a valid user go and bacome a valid user via authentication"
        })
    }

}

const isStudent = function(req,res,next){
    console.log("I am inside Student wala middleware");

    if(req.user.role === "student"){  //requset ke andar jo user ke andar jo uska role hai is equal to student
        next();  //go to next middleware
    }
    else{
        //if not a student
        res.json({
            success:false,
            message:"Access denied, this route is only for students"
        })
    }
}

const isAdmin = function(req,res,next){
    console.log("I am inside Admin wala middleware");

    if(req.user.role === "admin"){ //requset ke andar jo user ke andar jo uska role hai is equal to admin
        next(); //go to next middleware
    }
    else{
        //if not a admin
        res.json({
            success:false,
            message:"Access denied, this route is only for admins"
        })
    }
}

//routes

router.get("/student",authentication,isStudent, (req,res) => {
    //router ke andar jo path "/student" hai uske liye pehle authentication wala middleware chalega then isStudent wala middleware chalega then route handler chalega
    console.log("I am inside student route");
    res.send("Students specific page, admin is not allowed")
})

router.get("/admin",authentication,isAdmin, (req,res) => {
    //router ke andar jo path "/admin" hai uske liye pehle authentication wala middleware chalega then isAdmin wala middleware chalega then route handler chalega
    console.log("I am inside admin route");
    res.send("Admin specific page, student is not allowed")
})

//now rote toh hum ne create kr liya ab isko mount bhi toh krna hai application par
// mount krne ke liye sabse pehle routerfile ko import kr lenge index.js ke andar

module.exports = router