const express =require('express');
const app = express();
const dotenv= require('dotenv');
const mongoose =require('mongoose');



//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();



//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
{useNewUrlParser:true},
()=>console.log('connected to db...'));

//MiddleWare
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRoute)
app.use('/api/posts',postRoute)


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`)); 