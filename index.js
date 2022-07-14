const express =require('express');
const app = express();
const dotenv= require('dotenv');
const mongoose =require('mongoose');

dotenv.config();


//Connect to DB
mongoose.connect(
    'process.env.DB_CONNECT',
{userNewUrlParser:true},
()=>console.log('connected to db...'));

//Import Routes

const authRouthe = require('./routes/auth');


//Route Middlewares
app.use('/api/user',authRouthe)



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`)); 