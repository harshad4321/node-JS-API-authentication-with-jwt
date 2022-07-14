const express =require('express');
const app = express();
const dotenv= require('dotenv');
const mongoose =require('mongoose');

dotenv.config();


//Import Routes
const authRouthe = require('./routes/auth');

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
{useNewUrlParser:true},
()=>console.log('connected to db...'));

//MiddleWare
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRouthe)



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`)); 