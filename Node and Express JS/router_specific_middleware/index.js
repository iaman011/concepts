
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//import the route 
const route = require('./router/route')
//mounting the route 
app.use('/api', route)
//-> now the path should be http://localhost:3000/api/student and http://localhost:3000/api/student

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