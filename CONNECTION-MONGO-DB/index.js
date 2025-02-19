//IMPORTING THE FILES 
const express = require('express');
const app = express();
const connectDB = require('./db');
const users= require('./routes/users');

//body parser
app.use(express.json());

// const PORT = 3000;
const PORT = process.env.PORT || 5001;



//connect to database
connectDB();

app.use('/api',users);  //load the users
// or while load it we need to mount that via giving them router file e.g., /api

app.get('/', (req,res) => {
    console.log("I am inside home page router handler");
    res.send("Hello Jee, Welcome to google")

})

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


