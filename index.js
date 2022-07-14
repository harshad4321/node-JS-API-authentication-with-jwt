const express =require('express')
const app = express();
const mongoose =require('mongoose')


//Connect to DB

//Import Routes

const authRouthe = require('./routes/auth');


//Route Middlewares
app.use('/api/user',authRouthe)



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`)); 