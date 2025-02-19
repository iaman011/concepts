const express = require('express');
const app = express();
const port = 3000;

//loading middleware into the app
//inbuilt middleware express.json()
app.use(express.json());

// now we creating user define middleware
// middleware -logging/print,authentication, validation
// we are going to add 3 middlewares

const loggingMiddleware = function (req,res,next){
    // next means if there is another user define midleware is present else it depicts the routing(route handler)
     console.log('Logging')
     next(); //if this complete go to another middleware if not then go to routing(route handler)
}
//to load middlewares in the application
app.use(loggingMiddleware);

const authenticationMiddleware = function (req,res,next){
    // next means if there is another user define midleware is present else it depicts the routing(route handler)
     console.log('authentication')
     next(); //if this complete go to another middleware if not then go to routing(route handler)
}
app.use(authenticationMiddleware);

const validationMiddleware = function (req,res,next){
    // next means if there is another user define midleware is present else it depicts the routing(route handler)
     console.log('validation')
     next(); //if this complete go to another middleware if not then go to routing(route handler)
}
app.use(validationMiddleware);

//note: saare middleware must be written before route handler
//      by the use of next() function, you will able to do midlleware chaining while you stop the middleware at apoint by the way not proving it next() fn ,
//      directle give it to response: res.send ("Hello, World");
// order of middlewares matters the most while creation; in the order they written, the same order they will execute

//get requests
app.get('/', (req,res) => {   //pehle kya ho rha tha ki ye route ("/") dalne par iske andar ka route handler execute ho rha tha 
    //now, ab ye route dalne par pehle saare middleware execute honge then in the end rote handler execute hoga
    console.log("mein router handler hu");
    console.log(req.body); //in postman, code is written in body section to apply 
    res.send ("Hello, World");  //sending response hello,world of request
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
